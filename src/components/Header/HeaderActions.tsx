import { useAuth } from "@/features/authentication/hooks/use-auth";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function HeaderActions({ children }: PropsWithChildren) {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-5 text-white">
      {children}
    </div>
  );
}
