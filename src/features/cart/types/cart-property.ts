import { Property } from "@/features/property/types/property";

export type CartProperty = Pick<
  Property,
  "id" | "name" | "address" | "photos" | "price" | "createdAt"
>;
