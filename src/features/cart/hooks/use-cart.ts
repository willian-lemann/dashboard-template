import { create } from "@/lib/store";
import { CartStore } from "../types/cart-store";

import { useEffect, useMemo } from "react";
import { uniqueId } from "@/utils/uniqueId";
import { Cart } from "../types/cart";
import { addItemCartService } from "../services/add-item-cart";
import { addErrorNotification } from "@/components/Alert";
import { removeFromCartService } from "../services/remove-from-cart";

export const cartStore = create<CartStore>((set, get) => ({
  isCartOpen: false,
  items: [],
  isAddingToCart: {
    item: null,
    isLoading: false,
  },
  addToCart: async (property) => {
    const { items } = get();

    set({
      isAddingToCart: {
        isLoading: true,
        item: property.id,
      },
    });

    try {
      const response = await addItemCartService({ propertyId: property.id });
      const { success, error } = response.data;
      if (!success) {
        addErrorNotification(error?.message as string);
        return;
      }

      const newItem: Cart = {
        id: response.data.result,
        property,
        quantity: 1,
      };

      const isAlreadyInCart = items.find(
        (item) => item.property.id === property.id
      );

      if (isAlreadyInCart) {
        const filteredItems = items.map((item) => {
          if (item.property.id === isAlreadyInCart.property.id) {
            return {
              ...item,
              quantity: isAlreadyInCart.quantity + 1,
            };
          }

          return item;
        });

        set({ items: filteredItems });
      } else {
        set({ items: [...items, newItem] });
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      addErrorNotification(
        errorMessage || "Erro ao tentar adicionar item ao carrinho."
      );
    } finally {
      set({
        isAddingToCart: {
          isLoading: false,
          item: null,
        },
      });
    }
  },

  removeFromCart: async (id) => {
    const { items, closeCart } = get();
    const previousItems = structuredClone(items);

    const filteredItems = items.filter((item) => item.id !== id);
    set({ items: filteredItems });

    try {
      const response = await removeFromCartService(id);

      const { success, error } = response.data;

      if (!success) {
        set({ items: previousItems });
        addErrorNotification(String(error?.message));
        return;
      }

      if (previousItems.length === 1) {
        closeCart();
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      addErrorNotification(
        errorMessage || "Erro ao tentar remover um item do carrinho"
      );
    }
  },

  closeCart: () => {
    set({ isCartOpen: false });
  },

  toggleCart: () => {
    const { isCartOpen, items } = get();

    if (items.length === 0) return;

    set({ isCartOpen: !isCartOpen });
  },

  load: (items) => {
    set({ items });
  },
}));

export function useCart() {
  const items = cartStore((state) => state.items);

  const totalPrice = useMemo(() => {
    const eachItemAmount = items?.flatMap(
      (item) => item.quantity * Number(item.property?.price)
    );
    return eachItemAmount.reduce((previous, next) => previous + next, 0);
  }, [items]);

  return {
    totalPrice,
  };
}
