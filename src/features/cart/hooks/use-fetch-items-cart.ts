import { useQuery } from "@tanstack/react-query";
import { fetchItemsCartService } from "../services/fetch-items-cart";

export function useFetchItemsCart() {
  const { data, isLoading, isSuccess, isFetched } = useQuery({
    queryKey: ["cart-items"],
    queryFn: () => fetchItemsCartService(),
  });

  const cartItems = data?.result ?? [];

  return {
    cartItems,
    isLoading,
    isSuccess,
    isFetched,
  };
}
