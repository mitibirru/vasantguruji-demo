import { create } from "zustand";
import type { Product, CartItem } from "./types";

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.product.slug === product.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.slug === product.slug
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { product, quantity: 1 }] };
    }),

  removeItem: (slug) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.slug !== slug),
    })),

  updateQuantity: (slug, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.product.slug !== slug) };
      }
      return {
        items: state.items.map((i) =>
          i.product.slug === slug ? { ...i, quantity } : i
        ),
      };
    }),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
}));
