import { useFetchProperty } from "@/features/property/hooks/use-fetch-property";
import { useRouter } from "next/router";

import ImageGallery from "./ImageGallery";
import { formatMoney } from "@/utils/format-money";
import { DetailsSkeleton } from "./DetailsSkeleton";
import { cartStore } from "@/features/cart/hooks/use-cart";

export default function ExploreDetails() {
  const { query } = useRouter();
  const addToCart = cartStore((state) => state.addToCart);

  const { property } = useFetchProperty(query.id as string);

  if (!property) {
    return <DetailsSkeleton />;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-lg">
              <p>{property?.name}</p>
            </li>
          </ol>
        </nav>

        <ImageGallery photos={property.photos} />

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {property.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {formatMoney(property?.price)}
            </p>

            <button
              onClick={() => addToCart(property)}
              type="button"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white "
            >
              Adicionar ao carrinho
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="space-y-6">
              <p className="text-base text-gray-500">{property.description}</p>
            </div>

            {property.features.length > 0 ? (
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Incluso:</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {property.features?.map((feature) => (
                      <li key={feature.id} className="text-gray-400">
                        <span className="text-gray-600">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
