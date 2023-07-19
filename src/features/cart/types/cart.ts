import { CartProperty } from "./cart-property";

export type Cart = {
  id: string;
  quantity: number;
  property: CartProperty;
};
