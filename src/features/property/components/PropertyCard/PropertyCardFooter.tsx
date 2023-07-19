import { PropsWithChildren } from "react";

type PropertyCardActionsProps = {};

export function PropertyCardFooter({
  children,
}: PropsWithChildren<PropertyCardActionsProps>) {
  return (
    <div className="flex items-center justify-between p-4">
      {children}
    </div>
  );
}

PropertyCardFooter.displayName = "PropertyCardFooter";
