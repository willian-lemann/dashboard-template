import { classnames } from "@/utils/classnames";
import { PropsWithChildren, memo } from "react";

type PropertyCardRootProps = {
  className?: string;
};

export const PropertyCardRoot = memo(
  ({ children, className }: PropsWithChildren<PropertyCardRootProps>) => {
    return (
      <li
        className={classnames(
          "border relative border-zinc-100 shadow-sm rounded-b-md animate-fadeIn",
          String(className)
        )}
      >
        {children}
      </li>
    );
  }
);

PropertyCardRoot.displayName = "PropertyCardRoot";
