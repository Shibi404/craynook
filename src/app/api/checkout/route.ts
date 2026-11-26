import { NextResponse } from 'next/server';
import { CheckoutRequestPayload } from '@/types/cart';
import { PRODUCTS, getProductById } from '@/data/products';

export async function POST(request: Request) {
  try {
    const body: CheckoutRequestPayload = await request.json();
    const { product_cart } = body;

    if (!product_cart || !Array.isArray(product_cart) || product_cart.length === 0) {
      return NextResponse.json(
        { error: 'Cart must contain at least one item' },
        { status: 400 }
      );
    }

    // Resolve cart items against server-side catalog
    const resolvedItems = product_cart
      .map((item) => {
        const product = getProductById(item.product_id);
        if (!product) return null;
        return {
          product,
          quantity: item.quantity,
        };
      })
      .filter(Boolean);

    if (resolvedItems.length === 0) {
      return NextResponse.json(
        { error: 'No valid products found in cart' },
        { status: 400 }
      );
    }

    const apiKey = process.env.DODO_PAYMENTS_API_KEY;

    // When Dodo Payments API key is provided, create hosted checkout session via Dodo API
    if (apiKey) {
      const dodoEndpoint =
        process.env.DODO_PAYMENTS_API_URL || 'https://api.dodopayments.com/v1/checkouts';

      const dodoPayload = {
        products: resolvedItems.map((item) => ({
          product_id: item!.product.dodoProductId,
          quantity: item!.quantity,
        })),
        return_url: `${request.headers.get('origin') || 'https://craynook.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      };

      const dodoRes = await fetch(dodoEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(dodoPayload),
      });

      if (!dodoRes.ok) {
        const errorText = await dodoRes.text();
        console.error('Dodo Payments API Error:', errorText);
        return NextResponse.json(
          { error: 'Failed to create Dodo checkout session' },
          { status: 502 }
        );
      }

      const dodoData = await dodoRes.json();
      return NextResponse.json({ url: dodoData.url || dodoData.checkout_url });
    }

    // Safe fallback for local demo and preview mode without live API key:
    // Seamlessly routes to the styled /success page with verified order details
    const totalAmount = resolvedItems.reduce(
      (sum, item) => sum + item!.product.price * item!.quantity,
      0
    );
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    const mockSuccessUrl = `${origin}/success?mock=true&total=${totalAmount.toFixed(
      2
    )}&count=${resolvedItems.length}`;

    return NextResponse.json({ url: mockSuccessUrl });
  } catch (error) {
    console.error('Checkout route error:', error);
    return NextResponse.json(
      { error: 'An unexpected checkout error occurred' },
      { status: 500 }
    );
  }
}
