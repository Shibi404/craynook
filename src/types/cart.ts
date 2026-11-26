import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutItemPayload {
  product_id: string;
  quantity: number;
}

export interface CheckoutRequestPayload {
  product_cart: CheckoutItemPayload[];
}

export interface CheckoutResponse {
  url?: string;
  error?: string;
}
