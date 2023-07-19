import { create, persist } from "@/lib/store";
import { PropertyStore } from "../types/property-store";
import { removeFromWishlistService } from "@/features/wishlist/services/remove-from-wishlist";
import { addErrorNotification } from "@/components/Alert";
import { addToWishlistService } from "@/features/wishlist/services/add-to-wishlist";

export const propertiesStore = create<PropertyStore>((set, get) => ({
  properties: [],
  setProperties: (properties) => {
    set({ properties });
  },

  addToWishlist: async (propertyId) => {
    const { properties } = get();
    const previous = structuredClone(properties);

    const filteredPropertiesWishlistAdd = properties.map((item) => {
      if (item.id === propertyId) {
        return {
          ...item,
          isWishlist: true,
        };
      }
      return item;
    });

    set({ properties: filteredPropertiesWishlistAdd });

    try {
      const response = await addToWishlistService({ propertyId });
      const { success, error } = response.data;
      if (!success) {
        set({ properties: previous });
        addErrorNotification(error?.message as string);
        return;
      }
    } catch (error: any) {
      set({ properties: previous });
      const errorMessage = error?.response?.data?.message;
      addErrorNotification(
        errorMessage || "Erro ao tentar adicionar da lista de desejos"
      );
    }
  },

  removeFromWishlist: async (propertyId) => {
    const { properties } = get();
    const previous = structuredClone(properties);

    const filteredPropertiesWishlistRemove = properties.map((item) => {
      if (item.id === propertyId) {
        return {
          ...item,
          isWishlist: false,
        };
      }
      return item;
    });

    set({ properties: filteredPropertiesWishlistRemove });

    try {
      const response = await removeFromWishlistService(propertyId);
      const { success, error } = response.data;
      if (!success) {
        set({ properties: previous });
        addErrorNotification(error?.message as string);
        return;
      }
    } catch (error: any) {
      set({ properties: previous });
      const errorMessage = error?.response?.data?.message;
      addErrorNotification(errorMessage || "Erro ao tentar remover da lista");
    }
  },
}));

export function useProperties() {
  const state = propertiesStore();

  return {
    ...state,
  };
}
