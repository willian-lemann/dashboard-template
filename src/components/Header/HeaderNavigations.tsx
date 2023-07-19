import { PropsWithChildren } from "react";

export function HeaderNavigations({ children }: PropsWithChildren) {
  return <nav className="flex items-center justify-between" aria-label="Global">{children}</nav>;
}
