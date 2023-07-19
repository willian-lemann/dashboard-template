import { classnames } from "@/utils/classnames";
import { ElementType } from "react";

type PropertyCardHeaderActionProps = {
  icon: ElementType;
  className?: string;
  color?: string;
  onClick(): void;
};

export function PropertyCardHeaderIcon({
  icon: Icon,
  onClick,
  color,
  className,
}: PropertyCardHeaderActionProps) {
  return (
    <button
      onClick={() => onClick()}
      className={classnames(
        color ? color : "text-white",
        "cursor-pointer w-10 h-10 absolute top-4 right-4 z-10",
        String(className)
      )}
    >
      <Icon />
    </button>
  );
}

PropertyCardHeaderIcon.displayName = "PropertyCardHeaderIcon";
