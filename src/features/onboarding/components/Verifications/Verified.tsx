import { Check, CheckCircle } from "lucide-react";
import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";
import { Steps } from "@/features/onboarding/types/steps";

export function Verified() {
  function handleNextStep() {
    stepsStore.setState({ currentStep: Steps.ContractStep });
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="mt-10 flex flex-col gap-4 w-full">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-20 h-20 text-green-600 animate-fadeIn" />
          <div className="font-bold text-xl">
            <p> Tudo pronto! </p>
            <p className="font-normal text-base">
              Verificamos que o seu CPF está ok, para prosseguirmos precisamos
              que você precisa aceitar os termos do
              <span className="px-1 text-green-700 font-bold">
                CONTRATO DE COMPRA
              </span>
              do Imóvel.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-full">
          <div className="border rounded-md p-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-black font-medium"> Identificação: </span>
                <span className="text-green-600">Verificação ok</span>
              </div>

              <Check className="ml-4 text-green-600" />
            </div>
          </div>
        </div>

        <div className="mt-0">
          <div className="font-medium space-y-4">
            <p>Você deve estar pensando...</p>

            <i className="font-normal">
              ”Isso não faz sentido! Ainda não sei qual imóvel comprar.”
            </i>

            <ul className="list-disc pl-4">
              <li>
                <p>explicacao 1</p>
              </li>

              <li>
                <p>explicacao 2</p>
              </li>

              <li>
                <p>explicacao 3</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p>Ao prosseguir você concorda com todos nossos aceites.</p>
        </div>
      </div>

      <button
        onClick={handleNextStep}
        className="text-white bg-primary px-4 py-2 rounded-md self-end mt-10 font-bold"
      >
        Prosseguir
      </button>
    </div>
  );
}
