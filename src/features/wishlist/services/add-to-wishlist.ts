import { api } from "@/lib/axios";

type WishlistServiceParams = {
  propertyId: string;
};

export async function addToWishlistService({
  propertyId,
}: WishlistServiceParams) {
  const response = await api.post<ApiResponse>(`/wishlist/${propertyId}`);
  return response;
}
