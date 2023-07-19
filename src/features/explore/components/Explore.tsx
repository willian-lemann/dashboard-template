import { Loading } from "@/components/Loading";
import { Skeleton } from "@/components/Skeleton";
import { cartStore } from "@/features/cart/hooks/use-cart";
import { CartProperty } from "@/features/cart/types/cart-property";
import { useSearchForm } from "@/features/explore/hooks/use-search-form";
import { PropertyCard } from "@/features/property/components/PropertyCard";
import { getTransactionStatus } from "@/features/property/functions/get-transaction-status";
import { useFetchAllProperties } from "@/features/property/hooks/use-fetch-all-properties";
import { propertiesStore } from "@/features/property/hooks/use-properties";
import { Property } from "@/features/property/types/property";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

import { Search, ShoppingCart, SlidersHorizontal } from "lucide-react";

import { MouseEvent, useEffect, useMemo } from "react";

export default function Explore() {
  const { register, watch } = useSearchForm();

  const { properties, addToWishlist, removeFromWishlist } = propertiesStore(
    (state) => ({
      removeFromWishlist: state.removeFromWishlist,
      addToWishlist: state.addToWishlist,
      properties: state.properties,
    })
  );

  const { addToCart, isAddingToCart, items } = cartStore((state) => ({
    addToCart: state.addToCart,
    items: state.items,
    isAddingToCart: state.isAddingToCart,
  }));

  function handleAddToCart(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    property: CartProperty
  ) {
    event.stopPropagation();
    addToCart(property);
  }

  async function handleAddWishlist(property: Property) {
    if (property.isWishlist) {
      return await removeFromWishlist(property.id);
    }

    await addToWishlist(property.id);
  }

  const query = watch("query");

  const filteredProperties = useMemo(() => {
    return query?.length > 0
      ? properties?.filter(
          (propertyItem) =>
            propertyItem.name.toLowerCase().includes(query.toLowerCase()) ||
            propertyItem.address.toLowerCase().includes(query.toLowerCase())
        )
      : properties;
  }, [properties, query]);

  return (
    <div className="">
      <div className="pb-10">
        <div className="flex items-center">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="text-zinc-300" />
            </div>
            <input
              {...register("query")}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
              placeholder="Pesquise por nome, endereço.."
              required
            />
          </div>

          <button className="text-zinc-600 mx-4 cursor-pointer">
            <SlidersHorizontal />
          </button>
        </div>
      </div>

      <div>
        <ul className="grid grid-cols-3 gap-6">
          {filteredProperties?.map((property) => {
            const isAddedToCart = items.some(
              (item) => item.property.id === property.id
            );

            const isLoading =
              isAddingToCart.isLoading && isAddingToCart.item === property.id;

            return (
              <PropertyCard.Root key={property.id}>
                <PropertyCard.HeaderIcon
                  color={property.isWishlist ? "text-white" : ""}
                  icon={property.isWishlist ? HeartIconSolid : HeartIcon}
                  onClick={() => handleAddWishlist(property)}
                />
                <PropertyCard.Header images={property.photos} />
                <PropertyCard.Content property={property} />
                <PropertyCard.Footer.Root>
                  <PropertyCard.Footer.Label
                    text={getTransactionStatus(property.status)}
                  />

                  {isAddedToCart ? null : (
                    <PropertyCard.Footer.Action
                      isLoading={isLoading}
                      onAction={(event) => handleAddToCart(event, property)}
                    >
                      Adicionar
                      {isLoading ? (
                        <Loading className="w-4 h-4" />
                      ) : (
                        <ShoppingCart className="w-4 h-4" />
                      )}
                    </PropertyCard.Footer.Action>
                  )}
                </PropertyCard.Footer.Root>
              </PropertyCard.Root>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
