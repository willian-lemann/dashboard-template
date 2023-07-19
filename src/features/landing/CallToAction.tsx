import { useRouter } from "next/router";

type CallToActionProps = {
  label: string;
};

export function CallToAction({ label }: CallToActionProps) {
  const router = useRouter();

  function handleExplore() {
    router.push("/explore");
  }

  return (
    <button
      onClick={handleExplore}
      className="rounded-md bg-primary px-3.5 py-2 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {label}
    </button>
  );
}
