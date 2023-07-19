import { Checkout } from "@/features/cart/components/Checkout";
import { Cart } from "@/features/cart/types/cart";
import { setupApi } from "@/lib/axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function CheckoutPage() {
  return <Checkout />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const api = setupApi(context);

  const itemsInCart = await api.get<ApiResponse<Cart[]>>("/cart");

  if (itemsInCart.data.result?.length === 0) {
    return {
      redirect: { destination: "/explore", permanent: false },
    };
  }

  return {
    props: {},
  };
};
