import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";
import { VerificationForm } from "./VerificationForm";
import { Verified } from "./Verified";

export function Verifications() {
  const { persona } = stepsStore();

  return (
    <div className="flex">
      {persona.isVerified ? <Verified /> : <VerificationForm />}
    </div>
  );
}
