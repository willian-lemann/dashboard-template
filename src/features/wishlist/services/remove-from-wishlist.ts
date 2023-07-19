import { api } from "@/lib/axios";

export async function removeFromWishlistService(id: string) {
  const response = await api.delete<ApiResponse>(`/wishlist/${id}`);
  return response;
}
