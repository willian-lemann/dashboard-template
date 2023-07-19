import { api } from "@/lib/axios";
import { boolean } from "zod";
import { Property } from "../types/property";

export async function fetchAllProperties(user: boolean = false) {
  const response = await api.get<ApiResponse<Property[]>>(
    `${user ? "/properties/me" : "/properties"}`
  );
  return response.data;
}
