import { Menu } from "lucide-react";

type OpenSidebarButtonSeparatorProps = { onOpenSidebar(): void };

export function OpenSidebarButtonSeparator({
  onOpenSidebar,
}: OpenSidebarButtonSeparatorProps) {
  return (
    <>
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => onOpenSidebar()}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
    </>
  );
}
