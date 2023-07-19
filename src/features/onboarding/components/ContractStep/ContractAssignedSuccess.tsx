import { CheckCircleIcon, X as CloseIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function ContractAssignedSuccess() {
  const router = useRouter();

  function handleGoDashboard() {
    router.push("/dashboard");
  }

  return (
    <div className="w-full flex flex-col items-center gap-2 px-10">
      <CheckCircleIcon className="text-green-600" />

      <div>
        <h2 className="text-lg text-green-600 text-center">
          Contrato assinado!
        </h2>

        <p className="text-sm">
          Parabéns!, Agora você está apto para comprar e vender dentro de nossa
          plataforma. Um e-mail foi enviado para você com todas as informações
          que você precisa saber.
        </p>
      </div>

      <button
        onClick={handleGoDashboard}
        className="mt-10 text-white bg-primary px-4 py-1 rounded-md "
      >
        Ir para dashboard
      </button>
    </div>
  );
}
