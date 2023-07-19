import { Fingerprint, UploadCloud, Lock, RefreshCcw } from "lucide-react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CallToAction } from "./CallToAction";

const features = [
  {
    name: "Segurança de Banco",
    description:
      "Estamos comprometidos em manter um ambiente seguro e confiável para que você possa realizar suas compras com total tranquilidade.",
    icon: UploadCloud,
  },
  {
    name: "Cancele a compra em 24h",
    description:
      "Queremos garantir que nossos clientes se sintam confortáveis e seguros ao adquirir um imóvel conosco.",
    icon: Lock,
  },
  {
    name: "Sem Burocracia",
    description:
      "Utilizamos tecnologias inovadoras, como o reconhecimento facial e inteligencia artificial, para eliminar burocracia e simplificar o processo de compra.",
    icon: RefreshCcw,
  },
  {
    name: "Sem intermediadores",
    description:
      "Ao eliminar intermediários, como corretores ou agentes, buscamos garantir que as negociações sejam diretas e ágeis.",
    icon: Fingerprint,
  },
];

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Saiba porque as pessoas estão preferindo comprar imoveis na
            plataforma Livng
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unimos muitas tecnologias para serem nossas aliadas nessa jornada de
            compra de imóveis. Comprar com um clique é uma realidade e um jeito
            novo de investir.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Desconto na compra do segundo imóvel
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Economize até
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    30.000,00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>

                <div className="mt-2">
                  <CallToAction label="Explorar imóveis" />
                </div>

                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
