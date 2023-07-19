import { api } from "@/lib/axios";
import { Role } from "../types/role";

export async function fetchRolesService() {
  const response = await api.get<ApiResponse<Role[]>>("/onboarding/roles");
  return response.data;
}
