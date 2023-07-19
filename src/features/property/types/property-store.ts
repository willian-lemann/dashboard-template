import { Property } from "./property";

export type PropertyStore = {
  properties: Property[];
  setProperties(properties: Property[]): void;
  addToWishlist(propertyId: string): Promise<void>;
  removeFromWishlist(propertyId: string): Promise<void>;
};
