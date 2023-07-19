import { Skeleton as CSkeleton } from "@/components/Skeleton";
import { Home } from "lucide-react";

export function Skeleton() {
  return (
    <div className="relative">
      <CSkeleton />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
        <div className="flex items-center">
          <Home className="text-zinc-600 mx-auto h-10 w-10 animate-bounce" />
        </div>
        <span className="">Carregando imóveis...</span>
      </div>
    </div>
  );
}
