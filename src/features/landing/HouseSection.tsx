import { PropertyCard } from "../property/components/PropertyCard";

export function HouseSection() {
  return (
    <div className="-translate-y-16">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-0 md:max-w-7xl md:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Compre imóveis de maneira rápida
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Você Compra e Nós Cuidamos de Tudo
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Você está iniciando uma nova experiencia na compra de um imóvel
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8 ">
          {/* {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
