import { stepsStore } from "../../hooks/use-onboarding";
import { ProgressItem } from "./ProgressItem";
import { Steps } from "@/features/onboarding/types/steps";

const steps = [
  {
    name: "Escolher a Persona",
    value: Steps.RoleStep,
  },
  {
    name: "Verificações Gerais",
    value: Steps.Verification,
  },

  {
    name: "Termos do Contrato",
    value: Steps.ContractStep,
  },
];

export function ProgressSideBar() {
  const currentStep = stepsStore((state) => state.currentStep);

  return (
    <div className="mt-10">
      <ul className="space-y-8">
        {steps.map((step) => (
          <ProgressItem
            key={step.value}
            isCompleted={step.value < currentStep}
            name={step.name}
            value={step.value}
          />
        ))}
      </ul>
    </div>
  );
}
