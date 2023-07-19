import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";

import { classnames } from "@/utils/classnames";
import { Loading } from "@/components/Loading";

import { useVerificationForm } from "@/features/onboarding/hooks/use-verification-form";

export function VerificationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useVerificationForm();

  const { persona, verifyCPF } = stepsStore((state) => ({
    persona: state.persona,
    verifyCPF: state.verifyCPF,
  }));

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.cpf);
    await verifyCPF(data.cpf);
  });

  return (
    <div className="flex flex-col gap-4 pt-9 w-[300px]">
      <div>
        <h1 className="text-xl font-bold text-zinc-800">
          Escolha o tipo de persona
        </h1>
        <p className="text-zinc-800 font-normal">
          Precisamos do seu CPF para checarmos algumas informações sobre sua
          situação
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            placeholder="Digite seu cpf.."
            className="outline-none px-2 py-2 rounded-md border border-zinc-300"
            {...register("cpf")}
          />
          {errors.cpf?.message ? (
            <p className="text-red-600 text-sm animate-fadeIn">
              {errors.cpf?.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={persona.isVerifying}
          className={classnames(
            persona.isVerifying ? "opacity-80" : "opacity-100",
            "text-white bg-primary px-8 py-2 rounded-md font-bold flex items-center justify-center"
          )}
        >
          <span
            className={classnames(
              persona.isVerifying ? "opacity-50" : "opacity-100"
            )}
          >
            Prosseguir
          </span>

          {persona.isVerifying ? <Loading className="w-6 h-6 ml-4" /> : null}
        </button>
      </form>
    </div>
  );
}
