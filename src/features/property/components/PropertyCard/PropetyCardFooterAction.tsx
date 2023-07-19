import { classnames } from "@/utils/classnames";
import { MouseEvent, PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

type PropertyCardActionProps = {
  isLoading?: boolean;
  className?: string;
  aschild?: boolean;
  onAction(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
};

export function PropetyCardFooterAction({
  onAction,
  isLoading,
  children,
  aschild,
  className,
}: PropsWithChildren<PropertyCardActionProps>) {
  const Component = aschild ? Slot : "button";

  return (
    <Component
      disabled={isLoading}
      className={classnames(
        isLoading ? "opacity-50 cursor-wait" : "",
        "flex items-center self-end  gap-1 bg-primary text-white px-2 py-0.5 text-sm rounded-full",
        String(className)
      )}
      onClick={onAction}
    >
      {children}
    </Component>
  );
}

PropetyCardFooterAction.displayName = "PropetyCardFooterAction";
