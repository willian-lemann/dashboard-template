import { classnames } from "@/utils/classnames";
import Link from "next/link";
import { useRef } from "react";

type NavigationLinkProps = { isActive: boolean; href: string; name: string };

export function NavigationLink({ isActive, href, name }: NavigationLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      id={href}
      ref={ref}
      key={name}
      href={href}
      className={classnames(
        isActive ? "after:absolute" : "",
        " px-3 py-2 relative after:bottom-0 after:left-0 after:right-0 after:content-['_'] after:w-full after:bg-primary after:h-[3px] text-sm font-medium text-zinc-800 transition"
      )}
    >
      {name}
    </Link>
  );
}
