import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";

export function Contract() {
  return (
    <div className="max-w-2xl">
      <Disclosure defaultOpen as="div" className="w-full h-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-primary  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>1.0.0 Prazo de cancelamento</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-zinc-500`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="mt-3 text-sm leading-7 text-slate-500">
                1.0.1. O comprador da plataforma poderá cancelar a compra do
                imóvel em 24 horas. Segundo as seguintes regras
              </div>

              <ul className="list-disc px-4 pt-4 pb-2 w-auto h-auto text-sm text-gray-500">
                <li>
                  O comprador poderá cancelar sua compra do imovel se ele não
                  usou o recurso de &quot;reserva&quot; com aporte financeiro
                  para reservar o imovel. Esse recurso da plataforma pode ser
                  usado para que o imovel não seja mais encontrado nos
                  resultados de busca da plataforma.
                </li>
                <li>
                  O comprador não poderá cancelar sua compra se for usado o
                  recurso de visita física programada ao imóvel.
                </li>
                <li>Compras instantâneas podem ser canceladas em 24 horas.</li>
              </ul>
              <div className="mt-3 text-sm leading-7 text-slate-500">
                1.0.2. O comprador da plataforma poderá cancelar a compra do
              </div>

              <ul className="list-disc px-4 pt-4 pb-2 w-auto h-auto text-sm text-gray-500">
                <li>
                  O comprador poderá cancelar sua compra do imovel se ele não
                  usou o recurso de &quot;reserva&quot; com aporte financeiro
                  para reservar o imovel. Esse recurso da plataforma pode ser
                  usado para que o imovel não seja mais encontrado nos
                  resultados de busca da plataforma.
                </li>
                <li>
                  O comprador não poderá cancelar sua compra se for usado o
                  recurso de visita física programada ao imóvel.
                </li>
                <li>Compras instantâneas podem ser canceladas em 24 horas.</li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure defaultOpen as="div" className="w-full h-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-primary  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>1.2.0 Forma de pagamento</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-primary`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <ul className="list-disc px-4 pt-4 pb-2 w-auto h-auto text-sm text-gray-500">
                <li>
                  O pagamento é feito somente através das formas de pagamento
                  disponíveis na plataforma.
                </li>
                <li>
                  Caso o imóvel seja vendido fora dos meios de pagamento da
                  plataforma, o proprietário estará sujeito aos termos do
                  contrato de exclusividade da plataforma.
                </li>
                <li>
                  O pagamento é uma transação entre comprador e fintech Living.
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure defaultOpen as="div" className="w-full h-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-b-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-primary  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Preço de Compra:</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <ul className="list-disc px-4 pt-4 pb-2 w-auto h-auto text-sm text-gray-500">
                <li>
                  Valor total da compra em moeda corrente Condições de pagamento
                  (valor X como sinal e princípio de pagamento, valor Y
                  restante, número de parcelas, valor Z de cada parcela, data
                  limite para pagamento total)
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
