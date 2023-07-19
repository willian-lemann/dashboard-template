import { api } from "@/lib/axios";
import { StepData } from "../types/step-data";

export async function finishStepService(step: StepData) {
  const response = await api.put(`/onboarding/finish-step/${step.stepId}`, {
    ...step,
  });

  return response;
}
