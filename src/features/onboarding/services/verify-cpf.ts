import { api } from "@/lib/axios";

export async function verifyCPFService(cpf: string) {
  const response = await api.post(`/compliance/verify-cpf/${cpf}`);
  return response;
}
