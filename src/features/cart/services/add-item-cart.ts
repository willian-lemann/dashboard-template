import { api } from "@/lib/axios";
import { AddCartParams } from "../types/add-cart-params";

export async function addItemCartService({ propertyId }: AddCartParams) {
  const response = await api.post<ApiResponse>(`/cart/add`, { propertyId });
  return response;
}
