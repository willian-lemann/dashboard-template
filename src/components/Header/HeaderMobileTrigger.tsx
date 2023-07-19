import { Menu } from "lucide-react";

type HeaderMobileTrigger = {
  onOpenMobileMenu(value: boolean): void;
};

export function HeaderMobileTrigger({ onOpenMobileMenu }: HeaderMobileTrigger) {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => onOpenMobileMenu(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
