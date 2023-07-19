import { EmptyContent } from "./EmptyContent";

import { PropertyCard } from "@/features/property/components/PropertyCard";

import { Skeleton } from "@/components/Skeleton";

import { useFetchAllProperties } from "@/features/property/hooks/use-fetch-all-properties";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useEffect } from "react";

import { getTransactionStatus } from "@/features/property/functions/get-transaction-status";

export function Properties() {
  const { properties, isLoading } = useFetchAllProperties(true);

  if (isLoading) {
    return <Skeleton />;
  }

  if (properties?.length === 0) {
    return <EmptyContent />;
  }

  return (
    <ul className="grid grid-cols-3 gap-6">
      {properties?.map((property) => {
        return (
          <PropertyCard.Root key={property.id}>
            <PropertyCard.HeaderIcon
              color={property.isWishlist ? "text-primary" : ""}
              icon={property.isWishlist ? HeartIconSolid : HeartIcon}
              onClick={property.isWishlist ? () => {} : () => {}}
            />
            <PropertyCard.Header images={property.photos} />
            <PropertyCard.Content property={property} />
            <PropertyCard.Footer.Root>
              <PropertyCard.Footer.Label
                text={getTransactionStatus(property.status)}
              />

              <PropertyCard.Footer.Action onAction={() => {}}>
                asd
              </PropertyCard.Footer.Action>
            </PropertyCard.Footer.Root>
          </PropertyCard.Root>
        );
      })}
    </ul>
  );
}
