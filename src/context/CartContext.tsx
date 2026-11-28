'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Product } from '@/types/product';
import { CartItem, CheckoutRequestPayload, CheckoutResponse } from '@/types/cart';
import { useToast } from '@/context/ToastContext';

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  isCheckingOut: boolean;
  cartCount: number;
  cartSubtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  checkout: (directItem?: { product: Product; quantity: number }) => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'craynook_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { showToast } = useToast();

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage:', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [items, isHydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = useCallback(
    (product: Product, quantity = 1) => {
      setItems((prev) => {
        const existingIndex = prev.findIndex((item) => item.product.id === product.id);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }
        return [...prev, { product, quantity }];
      });

      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string) => {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartCount = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const cartSubtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [items]);

  const checkout = useCallback(
    async (directItem?: { product: Product; quantity: number }) => {
      const checkoutItems = directItem
        ? [{ product_id: directItem.product.id, quantity: directItem.quantity }]
        : items.map((item) => ({
            product_id: item.product.id,
            quantity: item.quantity,
          }));

      if (checkoutItems.length === 0) {
        showToast('Cart is empty', 'Please add a workbook before checkout.', 'info');
        return;
      }

      setIsCheckingOut(true);

      try {
        const payload: CheckoutRequestPayload = {
          product_cart: checkoutItems,
        };

        const res = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data: CheckoutResponse = await res.json();

        if (data.url) {
          // If successful, redirect to Dodo hosted checkout page
          window.location.href = data.url;
        } else {
          showToast(
            'Checkout Error',
            data.error || 'Unable to create checkout session. Please try again.',
            'error'
          );
        }
      } catch (err) {
        console.error('Checkout error:', err);
        showToast(
          'Checkout Error',
          'Failed to connect to checkout service. Please check your connection.',
          'error'
        );
      } finally {
        setIsCheckingOut(false);
      }
    },
    [items, showToast]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        isCheckingOut,
        cartCount,
        cartSubtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
