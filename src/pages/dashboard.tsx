import { Fragment, PropsWithChildren, useEffect, useState } from "react";

import { Sidebar } from "@/features/dashboard/components/Sidebar";
import * as Tabs from "@radix-ui/react-tabs";
import { pagesURLConsts } from "@/utils/constants/app-consts";
import { Dashboard } from "@/features/dashboard/components/Dashboard";
import Profile from "@/features/profile/components/Profile";
import { Cart } from "@/features/cart/components/Cart";
import { useFetchItemsCart } from "@/features/cart/hooks/use-fetch-items-cart";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, ChevronDownIcon } from "lucide-react";
import { classnames } from "@/utils/classnames";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import Image from "next/image";
import { useFetchAllProperties } from "@/features/property/hooks/use-fetch-all-properties";
import Explore from "@/features/explore/components/Explore";
import { Searchbar } from "@/features/dashboard/components/Searchbar";
import { UserMenu } from "@/features/dashboard/components/UserMenu";
import { OpenSidebarButtonSeparator } from "@/features/dashboard/components/OpenSidebarButtonSeparator";
import { Wishlist } from "@/features/wishlist/components/Wishlist";
import { Documents } from "@/features/documents/components/Documents";
import { propertiesStore } from "@/features/property/hooks/use-properties";
import { Loading } from "@/components/Loading";
import { Skeleton } from "@/features/property/components/Skeleton";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Tabs.Root defaultValue={pagesURLConsts.dashboard} asChild>
      <div className="grid grid-cols-[18rem_1fr]">
        <Sidebar
          sidebarOpen={sidebarOpen}
          onToggle={(value) => setSidebarOpen(value)}
        />

        <div className="">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <OpenSidebarButtonSeparator
              onOpenSidebar={() => setSidebarOpen(true)}
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <Searchbar />
              <UserMenu />
            </div>
          </div>

          <main className="py-10">
            <div className="md:px-8">
              <Tabs.Content asChild value={pagesURLConsts.dashboard}>
                <Dashboard />
              </Tabs.Content>

              <Tabs.Content asChild value={pagesURLConsts.profile}>
                <Profile />
              </Tabs.Content>

              <Tabs.Content asChild value={pagesURLConsts.cart}>
                {/* <Cart /> */}
              </Tabs.Content>

              <Tabs.Content asChild value={pagesURLConsts.explore}>
                <div>content</div>
              </Tabs.Content>

              <Tabs.Content asChild value={pagesURLConsts.wishlist}>
                {/* <Wishlist /> */}
              </Tabs.Content>

              <Tabs.Content asChild value={pagesURLConsts.documents}>
                {/* <Documents /> */}
              </Tabs.Content>
            </div>
          </main>
        </div>
      </div>
    </Tabs.Root>
  );
}
