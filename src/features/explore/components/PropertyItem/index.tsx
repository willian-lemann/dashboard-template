import { PropertyCard } from "@/features/property/components/PropertyCard";
import { Carousel } from "./Carousel";
import { HeartIcon } from "lucide-react";

type PropertyItemProps = {
  property: {
    id: string;
    name: string;
    address: string;
    photos: string[];
  };
};

export function PropertyItem({ property }: PropertyItemProps) {
  return (
    <div className=" mb-4 last:mb-0 w-full h-[200px] flex border relative border-zinc-100 shadow-sm rounded-b-md animate-fadeIn">
      <div className="w-1/2 h-full relative">
        <HeartIcon className="absolute h-8 w-8 top-4 right-4 z-20 text-white" />

        <Carousel images={property.photos} />
      </div>

      <div className="p-4">
        <p>{property.name}</p>
        <p>{property.address}</p>
      </div>
    </div>
  );
}
