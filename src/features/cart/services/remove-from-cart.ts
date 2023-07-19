import { api } from "@/lib/axios";

export async function removeFromCartService(id: string) {
  const response = await api.delete<ApiResponse>(`/cart/${id}`);
  return response;
}
