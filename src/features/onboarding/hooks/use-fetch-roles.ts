import { useQuery } from "@tanstack/react-query";
import { fetchRolesService } from "../services/fetch-roles";

export function useFetchRoles() {
  const { data, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: () => fetchRolesService(),
  });

  const roles = data?.result ?? [];

  return { roles, isLoading };
}
