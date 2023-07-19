import { ContractStep } from "@/features/onboarding/components/ContractStep";
import { GetHelp } from "@/features/onboarding/components/GetHelp";
import { Logo } from "@/features/onboarding/components/Logo";
import { ProgressSideBar } from "@/features/onboarding/components/ProgressSideBar";
import { RoleStep } from "@/features/onboarding/components/RoleStep";
import { Verifications } from "@/features/onboarding/components/Verifications";
import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";

import { Steps } from "@/features/onboarding/types/steps";
import { setupApi } from "@/lib/axios";
import { withOnboarding } from "@/utils/with-onboarding";
import { useEffect } from "react";

type OnboardingProps = {
  step: number;
};

export default function Onboarding({ step }: OnboardingProps) {
  const currentStep = stepsStore((state) => state.currentStep);

  const steps = {
    0: <RoleStep />,
    1: <Verifications />,
    2: <ContractStep />,
  };

  const stepElement = steps[currentStep as Steps];

  useEffect(() => {
    if (step) {
      stepsStore.setState({ currentStep: step });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-[30%_70%] min-h-screen container">
      <section className="bg-white h-screen">
        <div className="flex flex-col px-16 pt-10">
          <Logo />

          <ProgressSideBar />
        </div>
      </section>

      <section className="border-l border-zinc-100 flex items-center justify-center relative">
        <GetHelp />

        <div className="flex w-full h-full flex-col justify-between px-20 py-20">
          {stepElement}
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = withOnboarding(async (ctx) => {
  const api = setupApi(ctx);

  const response = await api.get("/onboarding/current-step");

  const { result } = response.data;

  if (!result) {
    return {
      props: {
        step: Steps.RoleStep,
      },
    };
  }

  const currentStep = result.currentStep;

  return {
    props: {
      step: Number(currentStep),
    },
  };
});
