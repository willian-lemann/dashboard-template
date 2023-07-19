import { classnames } from "@/utils/classnames";
import { PropsWithChildren } from "react";

type HeaderProps = { isSignedIn: boolean; className?: string };

export function HeaderRoot({
  isSignedIn,
  children,
  className,
}: PropsWithChildren<HeaderProps>) {
  return (
    <header
      className={classnames(
        "absolute inset-x-0 top-0 container z-[9999] p-6 lg:px-8",
        String(className)
      )}
    >
      {children}
    </header>
  );
}
