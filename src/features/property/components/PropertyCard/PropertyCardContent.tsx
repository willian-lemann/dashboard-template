import { formatMoney } from "@/utils/format-money";
import { Property } from "../../types/property";
import { dayjs } from "@/lib/dayjs";
import { useRouter } from "next/router";
import { classnames } from "@/utils/classnames";

type PropertyCardContentProps = {
  property: Property;
  className?: string;
};

export function PropertyCardContent({
  property,
  className,
}: PropertyCardContentProps) {
  const router = useRouter();

  function handleSeeDetails(id: string) {
    router.push(`/explore/${id}`);
  }

  return (
    <div
      onClick={() => handleSeeDetails(property.id)}
      className={classnames(
        "p-4 space-y-1 text-zinc-800 cursor-pointer",
        String(className)
      )}
    >
      <div className="flex items-center gap-1">
        <h3 className="font-bold text-sm">{formatMoney(property.price)}</h3>

        <div className="text-zinc-400 pl-2 text-xs flex items-center gap-1">
          <span>postado</span>
          <p>{dayjs().from(property.createdAt)}</p>
        </div>
      </div>

      <div className="space-y-1 text-xs text-zinc-400">
        <p>{property.address}</p>

        <div className="flex items-center gap-2 ">
          <p>{property.numberOfRooms} quartos</p>
          <p>{property.bathroomQuantity} banheiros</p>
          <p>{property.squareMeters}²</p>
        </div>
        <ul>
          {property.features?.map((feature) => (
            <span key={feature.id}>{feature.name}</span>
          ))}
        </ul>
      </div>
    </div>
  );
}

PropertyCardContent.displayName = "PropertyCardContent";
