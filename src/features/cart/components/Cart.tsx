// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { cartStore, useCart } from "@/features/cart/hooks/use-cart";
// import Image from "next/image";
// import { formatMoney } from "@/utils/format-money";
// import { useRouter } from "next/router";
// import { useFetchItemsCart } from "../hooks/use-fetch-items-cart";

// export function Cart() {
//   const router = useRouter();
//   const { cartItems, isFetched } = useFetchItemsCart();

//   const { isCartOpen, items, toggleCart, closeCart, removeFromCart, load } =
//     cartStore((state) => ({
//       isCartOpen: state.isCartOpen,
//       items: state.items,
//       toggleCart: state.toggleCart,
//       closeCart: state.closeCart,
//       removeFromCart: state.removeFromCart,
//       load: state.load,
//     }));

//   const { totalPrice } = useCart();

//   function handleKeepExploring() {
//     toggleCart();
//     router.push("/explore");
//   }

//   function handleGoCheckout() {
//     closeCart();
//     router.push("/checkout");
//   }

//   useEffect(() => {
//     if (isFetched) {
//       load(cartItems);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isFetched]);

//   return (
//     <div>

//       <ul role="list" className="-my-6 divide-y divide-gray-200">
//         {!items.length
//           ? null
//           : items?.map((item) => {
//               if (!item.property) return null;

//               return (
//                 <li key={item.id} className="flex py-6">
//                   <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                     <Image
//                       src={item.property.photos[0]}
//                       alt="Foto da propriedade"
//                       className="h-full w-full object-cover object-center"
//                       fill
//                       priority
//                     />
//                   </div>

//                   <div className="ml-4 flex flex-1 flex-col">
//                     <div>
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <h3>{item.property.name}</h3>
//                         <p className="ml-4">
//                           {formatMoney(item.property.price)}
//                         </p>
//                       </div>
//                       <p className="mt-1 text-sm text-gray-500">
//                         {item.property.address}
//                       </p>
//                     </div>
//                     <div className="flex flex-1 items-end justify-between text-sm">
//                       <p className="text-gray-500">
//                         Quantidade {item.quantity}
//                       </p>

//                       <div className="flex">
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           type="button"
//                           className="font-medium text-primary hover:text-primary/80 transition"
//                         >
//                           Remover
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//       </ul>
//     </div>
//   );
// }
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { classnames } from "@/utils/classnames";

const orders = [
  {
    number: "WU88191111",
    href: "#",
    invoiceHref: "#",
    createdDate: "Jul 6, 2021",
    createdDatetime: "2021-07-06",
    deliveredDate: "July 12, 2021",
    deliveredDatetime: "2021-07-12",
    total: "$160.00",
    products: [
      {
        id: 1,
        name: "Micro Backpack",
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        href: "#",
        price: "$70.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt:
          "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
      },
      // More products...
    ],
  },
  // More orders...
];

export function Cart() {
  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto">
          <div className="mx-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Minhas Compras
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto">
            <div className="mx-auto space-y-8 sm:px-4 lg:px-0">
              {orders.map((order) => (
                <>
                  <div
                    key={order.number}
                    className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                  >
                    <h3 className="sr-only">
                      Order placed on{" "}
                      <time dateTime={order.createdDatetime}>
                        {order.createdDate}
                      </time>
                    </h3>

                    <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                      <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Order number
                          </dt>
                          <dd className="mt-1 text-gray-500">{order.number}</dd>
                        </div>
                        <div className="hidden sm:block">
                          <dt className="font-medium text-gray-900">
                            Date placed
                          </dt>
                          <dd className="mt-1 text-gray-500">
                            <time dateTime={order.createdDatetime}>
                              {order.createdDate}
                            </time>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">
                            Total amount
                          </dt>
                          <dd className="mt-1 font-medium text-gray-900">
                            {order.total}
                          </dd>
                        </div>
                      </dl>

                      <Menu
                        as="div"
                        className="relative flex justify-end lg:hidden"
                      >
                        <div className="flex items-center">
                          <Menu.Button className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">
                              Options for order {order.number}
                            </span>
                            <EllipsisVerticalIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={order.href}
                                    className={classnames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    View
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={order.invoiceHref}
                                    className={classnames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Invoice
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                        <a
                          href={order.href}
                          className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span>Ver ordem</span>
                          <span className="sr-only">{order.number}</span>
                        </a>
                      </div>
                    </div>

                    {/* Products */}
                    <h4 className="sr-only">Items</h4>
                    <ul role="list" className="divide-y divide-gray-200">
                      {order.products.map((product) => (
                        <li key={product.id} className="p-4 sm:p-6">
                          <div className="flex items-center sm:items-start">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-6 flex-1 text-sm">
                              <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                <h5>{product.name}</h5>
                                <p className="mt-2 sm:mt-0">{product.price}</p>
                              </div>
                              <p className="hidden text-gray-500 sm:mt-2 sm:block">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 sm:flex sm:justify-between">
                            <div className="flex items-center">
                              <CheckCircleIcon
                                className="h-5 w-5 text-green-500"
                                aria-hidden="true"
                              />
                              <p className="ml-2 text-sm font-medium text-gray-500">
                                Delivered on{" "}
                                <time dateTime={order.deliveredDatetime}>
                                  {order.deliveredDate}
                                </time>
                              </p>
                            </div>

                            <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                              <div className="flex flex-1 justify-center">
                                <a
                                  href={product.href}
                                  className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                >
                                  View product
                                </a>
                              </div>
                              <div className="flex flex-1 justify-center pl-4">
                                <a
                                  href="#"
                                  className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                >
                                  Buy again
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    key={order.number}
                    className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                  >
                    <h3 className="sr-only">
                      Order placed on{" "}
                      <time dateTime={order.createdDatetime}>
                        {order.createdDate}
                      </time>
                    </h3>

                    <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                      <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Order number
                          </dt>
                          <dd className="mt-1 text-gray-500">{order.number}</dd>
                        </div>
                        <div className="hidden sm:block">
                          <dt className="font-medium text-gray-900">
                            Date placed
                          </dt>
                          <dd className="mt-1 text-gray-500">
                            <time dateTime={order.createdDatetime}>
                              {order.createdDate}
                            </time>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">
                            Total amount
                          </dt>
                          <dd className="mt-1 font-medium text-gray-900">
                            {order.total}
                          </dd>
                        </div>
                      </dl>

                      <Menu
                        as="div"
                        className="relative flex justify-end lg:hidden"
                      >
                        <div className="flex items-center">
                          <Menu.Button className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">
                              Options for order {order.number}
                            </span>
                            <EllipsisVerticalIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={order.href}
                                    className={classnames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    View
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={order.invoiceHref}
                                    className={classnames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Invoice
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                        <a
                          href={order.href}
                          className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span>View Order</span>
                          <span className="sr-only">{order.number}</span>
                        </a>
                      </div>
                    </div>

                    {/* Products */}
                    <h4 className="sr-only">Items</h4>
                    <ul role="list" className="divide-y divide-gray-200">
                      {order.products.map((product) => (
                        <li key={product.id} className="p-4 sm:p-6">
                          <div className="flex items-center sm:items-start">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-6 flex-1 text-sm">
                              <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                <h5>{product.name}</h5>
                                <p className="mt-2 sm:mt-0">{product.price}</p>
                              </div>
                              <p className="hidden text-gray-500 sm:mt-2 sm:block">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 sm:flex sm:justify-between">
                            <div className="flex items-center">
                              <CheckCircleIcon
                                className="h-5 w-5 text-green-500"
                                aria-hidden="true"
                              />
                              <p className="ml-2 text-sm font-medium text-gray-500">
                                Delivered on{" "}
                                <time dateTime={order.deliveredDatetime}>
                                  {order.deliveredDate}
                                </time>
                              </p>
                            </div>

                            <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                              <div className="flex flex-1 justify-center">
                                <a
                                  href={product.href}
                                  className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                >
                                  View product
                                </a>
                              </div>
                              <div className="flex flex-1 justify-center pl-4">
                                <a
                                  href="#"
                                  className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                >
                                  Buy again
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
