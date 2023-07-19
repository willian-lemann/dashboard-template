import { useQuery } from "@tanstack/react-query";
import { fetchAllProperties } from "../services/fetch-all-properties";

export function useFetchAllProperties(user: boolean = false) {
  const { data, isLoading, isInitialLoading, isFetched } = useQuery({
    queryKey: [user ? `user-properties` : "properties"],
    queryFn: () => fetchAllProperties(user),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 5, // 5 minute
  });

  return {
    properties: data?.result ?? [],
    isLoading,
    isInitialLoading,
    isFetched,
  };
}
