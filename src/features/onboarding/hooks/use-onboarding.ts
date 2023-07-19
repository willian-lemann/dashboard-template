import Router from "next/router";

import { create } from "@/lib/store";
import { StepsStore } from "../types/steps-store";
import { Steps } from "../types/steps";

import { addErrorNotification } from "@/components/Alert";

import { verifyCPFService } from "../services/verify-cpf";
import { finishStepService } from "../services/finish-step";

export const stepsStore = create<StepsStore>()((set, get) => ({
  currentStep: Steps.RoleStep,
  contract: {
    isSaving: false,
    isAssigned: false,
    isModalOpen: true,
  },
  persona: { isVerified: false, isVerifying: false },

  saveRole: async (role) => {
    set({ currentStep: Steps.Verification });

    try {
      const response = await finishStepService({
        stepId: Steps.RoleStep,
        roleId: role,
      });

      if (!response.data.success) {
        addErrorNotification("Erro ao salvar tipo de usuario");
        set({ currentStep: Steps.RoleStep });
        return;
      }
    } catch (error) {
      addErrorNotification("Erro ao salvar tipo de usuário");
      set({ currentStep: Steps.RoleStep });
    }
  },

  verifyCPF: async (cpf) => {
    set({ persona: { ...get().persona, isVerifying: true } });

    try {
      const response = await finishStepService({
        stepId: Steps.Verification,
        cpf,
      });

      if (response?.data?.error) {
        addErrorNotification(response.data.message);
        return set({ currentStep: Steps.Verification });
      }

      set({ currentStep: Steps.ContractStep });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      set({ currentStep: Steps.Verification });
      addErrorNotification(errorMessage || "Erro ao tentar verificar CPF");
    } finally {
      set({ persona: { ...get().persona, isVerifying: false } });
    }
  },

  signContract: async () => {
    set({ contract: { ...get().contract, isSaving: true } });

    try {
      await finishStepService({ stepId: Steps.ContractStep });

      set({
        contract: {
          ...get().contract,
          isSaving: false,
          isAssigned: true,
          isModalOpen: true,
        },
      });
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      addErrorNotification(errorMessage || "Erro ao tentar assinar contrato");

      set({ contract: { ...get().contract, isSaving: false } });
    }
  },

  setStartSignContract: () => {
    set({ contract: { ...get().contract, isSaving: true } });
  },

  setStopSignContract: () => {
    set({
      contract: {
        ...get().contract,
        isAssigned: false,
        isSaving: false,
      },
    });
  },

  setContractSigned: () => {
    set({
      contract: {
        ...get().contract,
        isAssigned: true,
        isModalOpen: false,
        isSaving: false,
      },
    });

    Router.push("/dashboard");
  },

  openAssignContractModal: () => {
    set({ contract: { ...get().contract, isModalOpen: true } });
  },

  closeAssignContractModal: () => {
    set({ contract: { ...get().contract, isModalOpen: false } });
  },
}));
