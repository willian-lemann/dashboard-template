import { UserAvatar } from "@/components/UserAvatar";
import { authStore, useAuth } from "@/features/authentication/hooks/use-auth";
import { classnames } from "@/utils/classnames";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { useStore } from "zustand";

const userNavigation = [{ name: "Sair", href: "#" }];

export function UserMenu() {
  const user = authStore((state) => state.user);
  const { logout } = useAuth();

  return (
    <div className="flex items-center gap-x-4 lg:gap-x-6">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div
        className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
        aria-hidden="true"
      />

      {/* Profile dropdown */}
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>

          {user ? <UserAvatar avatar={user.avatar} name={user.name} /> : null}

          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              Bem-vindo, {user?.name}
            </span>
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => {
                  if (item.name === "Sair") {
                    return (
                      <a
                        href={item.href}
                        onClick={logout}
                        className={classnames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  }

                  return (
                    <a
                      href={item.href}
                      className={classnames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                }}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
