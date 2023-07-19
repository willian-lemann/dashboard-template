import { PropertyCard } from "@/features/property/components/PropertyCard";
import { getTransactionStatus } from "@/features/property/functions/get-transaction-status";

import { HeartIcon } from "@heroicons/react/24/solid";

import { propertiesStore } from "@/features/property/hooks/use-properties";
import { EmptyWishlist } from "./EmptyWishlist";

export function Wishlist() {
  const { properties, removeFromWishlist } = propertiesStore((state) => ({
    properties: state.properties,
    removeFromWishlist: state.removeFromWishlist,
  }));

  const wishlist = properties.filter((item) => item.isWishlist);

  return (
    <div>
      <div className="pb-8 text-2xl">
        <h1>Minha Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <ul className="grid grid-cols-3 py-10 gap-6">
          {wishlist.map((property) => (
            <>
              <PropertyCard.Root key={property.id}>
                <PropertyCard.HeaderIcon
                  icon={HeartIcon}
                  onClick={() => {
                    removeFromWishlist(property.id);
                  }}
                />
                <PropertyCard.Header images={property.photos} />
                <PropertyCard.Content property={property} />
                <PropertyCard.Footer.Root>
                  <PropertyCard.Footer.Label
                    text={getTransactionStatus(property.status)}
                  />
                </PropertyCard.Footer.Root>
              </PropertyCard.Root>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
