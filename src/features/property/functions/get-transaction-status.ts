import { TransactionStatus } from "../types/property";

export function getTransactionStatus(status?: TransactionStatus) {
  if (status === "PENDING") {
    return "Pagamento Pendente";
  }

  if (status === "APPROVED") {
    return "Pagamento Aprovado";
  }

  if (status === "PAYED") {
    return "Pago";
  }

  return "";
}
