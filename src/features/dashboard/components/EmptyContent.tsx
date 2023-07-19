import { useRouter } from "next/router";

export function EmptyContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
      <div className="flex flex-col items-center gap-4">
        <h2>Voce nao comprou nenhum imovel ainda</h2>
        <button
          className="bg-primary text-white rounded-md py-2 px-2 w-fit mx-auto"
          onClick={() => router.push("/explore")}
        >
          Explorar imóveis
        </button>
      </div>
    </div>
  );
}
