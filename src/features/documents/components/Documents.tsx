import { UploadDocument } from "./UploadDocument";

export function Documents() {
  return (
    <div>
      <div>
        <h2 className="text-2xl">Meus Documentos</h2>
      </div>

      <div className="py-10 grid grid-cols-3 gap-4">
        <UploadDocument />
        <UploadDocument />
        <UploadDocument />
      </div>
    </div>
  );
}
