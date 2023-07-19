import { api } from "@/lib/axios";
import { Property } from "../types/property";

export async function fetchPropertyService(id: string) {
  const response = await api.get<ApiResponse<Property>>(`/properties/${id}`);
  return response.data;
}
