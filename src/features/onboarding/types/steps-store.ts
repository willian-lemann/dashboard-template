export type StepsStore = {
  currentStep: number;
  persona: {
    isVerifying: boolean;
    isVerified: boolean;
  };
  contract: {
    isModalOpen: boolean;
    isSaving: boolean;
    isAssigned: boolean;
  };

  saveRole(role: string): Promise<void>;
  verifyCPF(cpf: string): Promise<void>;
  signContract(): Promise<void>;
  setStartSignContract(): void;
  setStopSignContract(): void;
  setContractSigned(): void;

  openAssignContractModal(): void;
  closeAssignContractModal(): void;
};
