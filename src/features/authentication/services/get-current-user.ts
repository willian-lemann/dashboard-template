import { api } from "@/lib/axios";

export async function getCurrentUserService() {
  const response = await api.get("/me");
  return response;
}
