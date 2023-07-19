import { api } from "@/utils/api";
import { Property } from "../types/property";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertyService } from "../services/fetch-property";

export function useFetchProperty(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchPropertyService(id),
  });

  return {
    property: data?.result ?? null,
    isLoading,
  };
}
