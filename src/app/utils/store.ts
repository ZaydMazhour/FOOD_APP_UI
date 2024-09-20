import { User } from "@supabase/auth-helpers-nextjs";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ActionTypes, CartType } from "../types/types";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
  user: null,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      user: INITIAL_STATE.user,
      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: Number(item.price) + Number(product.price),
                }
              : item
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: Number(state.totalPrice + item.price),
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: Number(state.totalPrice + item.price),
          }));
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      clearCart() {
        set({
          products: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
      updateUser(newUser) {
        set({ user : newUser });
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
