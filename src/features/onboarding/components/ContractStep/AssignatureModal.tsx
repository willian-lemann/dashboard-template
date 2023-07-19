import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";
import { AssignatureModalContent } from "./AssignatureModalContent";
import { ContractAssignedSuccess } from "./ContractAssignedSuccess";
import { classnames } from "@/utils/classnames";
import { Loading } from "@/components/Loading";

export function AssignatureModal() {
  const { contract, openAssignContractModal, closeAssignContractModal } =
    stepsStore((state) => ({
      contract: state.contract,
      openAssignContractModal: state.openAssignContractModal,
      closeAssignContractModal: state.closeAssignContractModal,
    }));

  return (
    <>
      <button
        disabled={contract.isSaving}
        onClick={openAssignContractModal}
        className={classnames(
          contract.isSaving ? "opacity-60" : "opacity-100",
          "text-white bg-primary px-4 py-2 rounded-md font-bold flex items-center gap-2"
        )}
      >
        <span> Assinar contrato </span>
        {contract.isSaving ? <Loading /> : null}
      </button>

      <Transition appear show={contract.isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeAssignContractModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {contract.isAssigned ? (
                    <ContractAssignedSuccess />
                  ) : (
                    <AssignatureModalContent />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
