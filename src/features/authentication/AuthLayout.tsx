import { PropsWithChildren } from "react";
import { Player } from "./Player";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center min-h-screen">
      <section className="hidden md:flex w-1/2 bg-black h-screen relative">
        <Player />
      </section>

      <section className="flex w-full md:w-1/2 h-full items-center justify-center">
        {children}
      </section>
    </div>
  );
}
