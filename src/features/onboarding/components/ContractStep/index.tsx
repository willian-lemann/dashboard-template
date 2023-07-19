import { MailIcon, ScanLineIcon } from "lucide-react";

import { Contract } from "./Contract";
import { AssignatureModal } from "./AssignatureModal";

export function ContractStep() {
  return (
    <div className="pt-10">
      <Contract />

      <div className="self-end mt-10 flex items-center justify-end gap-4 text-sm">
        <AssignatureModal />
      </div>
    </div>
  );
}
