import { Loading } from "@/components/Loading";
import { CheckmarkIcon } from "react-hot-toast";

type ProgressCircleProps = {
  isCompleted: boolean;
  value: number;
  isVerifying: boolean;
};

export function ProgressCircle({
  isCompleted,
  value,
  isVerifying,
}: ProgressCircleProps) {
  if (isCompleted) {
    return <CheckmarkIcon />;
  }

  return (
    <div className="border-2 flex items-center justify-center border-primary rounded-full w-5 h-5">
      {isVerifying ? (
        <Loading className="text-primary w-5 h-5" />
      ) : (
        <span className="text-primary text-xs font-bold">{value}</span>
      )}
    </div>
  );
}
