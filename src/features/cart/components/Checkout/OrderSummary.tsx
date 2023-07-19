import { formatMoney } from "@/utils/format-money";
import { cartStore } from "../../hooks/use-cart";
import { PaymentMethods } from "./PaymentMethods";
import Image from "next/image";

export function OrderSummary() {
  const cartItems = cartStore((state) => state.items);

  return (
    <div className="px-4 pt-8">
      <p className="text-xl font-medium">Informações da compra</p>
      <p className="text-gray-400">
        Cheque os items adicionados. E selecione uma forma de pagamento.
      </p>

      <ul className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {cartItems.map((cartItem) => (
          <div
            key={cartItem.id}
            className="flex flex-col rounded-lg bg-white md:flex-row md:items-center"
          >
            <div className="relative h-24 w-28 rounded-md">
              <Image
                className="rounded-md border object-cover object-center"
                src={cartItem.property.photos[0]}
                alt="Imagem do item do carrinho"
                fill
              />
            </div>

            <div className="flex w-full flex-col px-4">
              <span className="font-semibold">{cartItem.property.name}</span>
              <span className="float-right text-gray-400">
                {cartItem.property.address}
              </span>
              <p className="text-lg font-bold">
                {formatMoney(cartItem.property.price)}
              </p>
            </div>
          </div>
        ))}
      </ul>

      <PaymentMethods />
    </div>
  );
}
