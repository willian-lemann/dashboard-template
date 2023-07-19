import { useAuth } from "@/features/authentication/hooks/use-auth";
import { cartStore } from "@/features/cart/hooks/use-cart";
import {
  FolderIcon,
  HeartIcon,
  Home,
  User,
  Files,
  PlaneLanding,
  LucidePersonStanding,
  HomeIcon,
  RadioTower,
  ChevronFirst,
  Infinity,
  Package,
  Map,
  MapPin,
} from "lucide-react";

import { Fragment } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { pagesURLConsts } from "@/utils/constants/app-consts";
import { Logo } from "@/features/onboarding/components/Logo";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { classnames } from "@/utils/classnames";
import { Dialog, Transition } from "@headlessui/react";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

const navigation = [
  {
    name: "Dashboard",
    href: pagesURLConsts.dashboard,
    icon: LayoutDashboardIcon,
    current: true,
  },
  {
    name: "Home",
    href: pagesURLConsts.home,
    icon: Package,
    current: false,
  },
  {
    name: "Meu Perfil",
    href: pagesURLConsts.profile,
    icon: User,
    current: false,
  },
  {
    name: "Compras",
    href: pagesURLConsts.cart,
    icon: FolderIcon,
    current: false,
  },
  { name: "Explore", href: pagesURLConsts.explore, icon: Home, current: false },
  {
    name: "Explore no mapa",
    href: pagesURLConsts.explore,
    icon: MapPin,
    current: false,
  },
  {
    name: "Lista de desejos",
    href: pagesURLConsts.wishlist,
    icon: HeartIcon,
    current: false,
  },
  {
    name: "Documentos",
    href: pagesURLConsts.documents,
    icon: Files,
    current: false,
  },
];

type SidebarProps = {
  sidebarOpen: boolean;
  onToggle: (value: boolean) => void;
};

export function Sidebar({ sidebarOpen, onToggle }: SidebarProps) {
  return (
    <div>
      {/* mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={() => onToggle(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => onToggle(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <Logo />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classnames(
                                  item.current
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>

                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>

          <nav className="flex flex-1 flex-col">
            <Tabs.List asChild>
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      if (item.name === "Explore no mapa") {
                        return (
                          <Link
                            href={pagesURLConsts.explore}
                            key={item.name}
                            className="transition-colors data-[state=active]:bg-gray-800 text-white data-[state=active]:text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 cursor-pointer rounded-md p-2 text-sm leading-6 font-semibold "
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        );
                      }

                      if (item.href === pagesURLConsts.home) {
                        return (
                          <Link
                            href={pagesURLConsts.home}
                            key={item.name}
                            className="transition-colors data-[state=active]:bg-gray-800 text-white data-[state=active]:text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 cursor-pointer rounded-md p-2 text-sm leading-6 font-semibold "
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        );
                      }

                      return (
                        <Tabs.Trigger key={item.name} value={item.href} asChild>
                          <li className="transition-colors data-[state=active]:bg-gray-800 text-white data-[state=active]:text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 cursor-pointer rounded-md p-2 text-sm leading-6 font-semibold ">
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </li>
                        </Tabs.Trigger>
                      );
                    })}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    Configurações
                  </a>
                </li>
              </ul>
            </Tabs.List>
          </nav>
        </div>
      </div>
    </div>
  );
}
