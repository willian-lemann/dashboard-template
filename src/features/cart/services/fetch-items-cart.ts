import { api } from "@/lib/axios";
import { Cart } from "../types/cart";

export async function fetchItemsCartService() {
  const response = await api.get<ApiResponse<Cart[]>>("/cart");
  return response.data;
}
