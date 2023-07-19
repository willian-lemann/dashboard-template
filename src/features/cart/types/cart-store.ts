import { Property } from "@/features/property/types/property";

import { Cart } from "./cart";
import { CartProperty } from "./cart-property";

export type CartStore = {
  items: Cart[];
  isCartOpen: boolean;
  isAddingToCart: {
    isLoading: boolean;
    item: string | null;
  };
  closeCart(): void;
  addToCart(property: CartProperty): void;
  removeFromCart(id: string): Promise<void>;
  toggleCart(): void;
  load(items: Cart[]): void;
};
