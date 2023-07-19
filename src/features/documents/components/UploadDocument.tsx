import { File } from "lucide-react";

export function UploadDocument() {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 text-zinc-800 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <File className="h-10 w-10 mx-auto" />

      <span className="mt-2 block text-sm font-semibold text-zinc-800">
        Carregar Escritura
      </span>
    </button>
  );
}
