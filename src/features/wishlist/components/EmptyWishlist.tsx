import { pagesURLConsts } from "@/utils/constants/app-consts";
import * as Tabs from "@radix-ui/react-tabs";
import { Heart, Home } from "lucide-react";

export function EmptyWishlist() {
  return (
    <div className="w-full h-full flex items-center justify-center mt-20">
      <div className="text-center flex flex-col">
        <div className="mx-auto">
          <Heart className="h-10 w-10" />
        </div>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">
          Nenhuma propriedade na sua lista de desejos
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Começe procurando algumas propriedades
        </p>
        <div className="mt-6">
          <Tabs.List>
            <Tabs.Trigger value={pagesURLConsts.explore} asChild>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Home className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                Explorar
              </button>
            </Tabs.Trigger>
          </Tabs.List>
        </div>
      </div>
    </div>
  );
}
