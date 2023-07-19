import { Dialog } from "@headlessui/react";

import { Loading } from "@/components/Loading";
import { classnames } from "@/utils/classnames";
import { stepsStore } from "../../hooks/use-onboarding";

export function AssignatureModalContent() {
  const { signContract, contract, closeAssignContractModal } = stepsStore(
    (state) => ({
      signContract: state.signContract,
      contract: state.contract,
      closeAssignContractModal: state.closeAssignContractModal,
    })
  );

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Assinatura do Contrato
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Ao assinar este contrato, você concorda com todos os termos e
          condições estabelecidos nele.
        </p>
      </div>

      <div className="mt-4 flex justify-between gap-4">
        <button
          type="button"
          className="rounded-md border border-transparent transition  px-0 py-2 text-sm font-medium text-zinc-800"
          onClick={closeAssignContractModal}
        >
          Vou esperar
        </button>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent transition hover:text-red-500  px-4 py-2 text-sm font-medium text-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={closeAssignContractModal}
          >
            Cancelar
          </button>
          <button
            type="button"
            disabled={contract.isSaving}
            className={classnames(
              contract.isSaving
                ? "cursor-not-allowed opacity-60"
                : "opacity-100 cursor-pointer",
              "flex items-center gap-2 rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white"
            )}
            onClick={signContract}
          >
            <span>Assinar</span>

            {contract.isSaving ? <Loading /> : null}
          </button>
        </div>
      </div>
    </>
  );
}
