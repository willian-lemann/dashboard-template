import { Property } from "@/features/property/types/property";
import { api } from "@/lib/axios";
import { Wishlist } from "../types/wishlist";

export async function fetchWishlistService() {
  const response = await api.get<ApiResponse<Property[]>>("wishlist");
  return response.data;
}
