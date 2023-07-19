import { stepsStore } from "@/features/onboarding/hooks/use-onboarding";

import { ArrowRight } from "lucide-react";
import { useFetchRoles } from "../hooks/use-fetch-roles";
import { Loading } from "@/components/Loading";

export function RoleStep() {
  const { roles, isLoading } = useFetchRoles();
  const saveRole = stepsStore((state) => state.saveRole);

  const rolesList = roles?.map(({ id, role }) => ({
    id,
    role: role === "seller" ? "Quero Vender" : "Quero Comprar",
  }));

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="space-y-2">
        <h1 className="pt-9 text-xl font-bold text-zinc-800">
          Escolha o tipo de persona
        </h1>
        <div className="text-zinc-800 font-normal">
          <span>Compra e venda de imóveis de um jeito</span>{" "}
          <span className="font-bold text-primary">
            seguro rápido e prático
          </span>
        </div>
      </div>

      <div className="flex gap-4 flex-col mt-10 max-w-lg">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          rolesList.map(({ id, role }) => (
            <div
              key={id}
              onClick={() => saveRole(id)}
              className="group shadow border border-zinc-100 cursor-pointer text-lg p-10 flex items-center w-full justify-between  hover:outline transition-all duration-100 hover:outline-primary rounded-md"
            >
              <h2 className="group-hover:text-primary transition duration-300">
                {role}
              </h2>

              <ArrowRight className="transition duration-200 group-hover:text-primary" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
