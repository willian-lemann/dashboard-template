import { classnames } from "@/utils/classnames";
import { CheckCircle } from "lucide-react";
import { ProgressCircle } from "./ProgressCircle";
import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";
import { Steps } from "@/features/onboarding/types/steps";

type ProgressItemProps = {
  name: string;
  value: number;
  isCompleted: boolean;
};

export function ProgressItem({ isCompleted, name, value }: ProgressItemProps) {
  const { persona } = stepsStore();

  const isLoading = persona.isVerifying && value === Steps.Verification;

  return (
    <li
      className={classnames(
        isCompleted
          ? "before:border-l-green-600"
          : "before:border-l-zinc-800/30",
        "transition-all duration-300 flex relative items-center gap-2 before:content-[''] last:before:content-[] before:absolute before:h-[32px] before:w-10 before:top-6 before:left-2.5 before:border-l"
      )}
    >
      <ProgressCircle
        isCompleted={isCompleted}
        value={value + 1}
        isVerifying={isLoading}
      />

      <span className={classnames(isLoading ? "opacity-30" : "opacity-100")}>
        {name}
      </span>
    </li>
  );
}
