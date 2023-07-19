import { classnames } from "@/utils/classnames";
import { Carousel } from "./Carousel";

type PropertyCardHeaderProps = {
  images: string[];
  className?: string;
};

export function PropertyCardHeader({
  images,
  className,
}: PropertyCardHeaderProps) {
  return (
    <div
      className={classnames(
        "relative aspect-1 rounded-t-md",
        String(className)
      )}
    >
      {images ? <Carousel images={images} /> : null}
    </div>
  );
}

PropertyCardHeader.displayName = "PropertyCardHeader";
