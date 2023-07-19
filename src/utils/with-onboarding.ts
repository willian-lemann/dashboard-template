import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import { getAuth } from "@clerk/nextjs/server";

import { appConsts, pagesURLConsts } from "./constants/app-consts";
import { addCookie, removeCookie } from "@/lib/cookies";
import { setupApi } from "@/lib/axios";
import { addErrorNotification } from "@/components/Alert";

export function withOnboarding<P>(fn: GetServerSideProps<any>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { userId } = getAuth(context.req);

    if (userId) {
      const api = setupApi(context);

      addCookie(context, appConsts.cookieKey, userId);

      api.defaults.headers.Authorization = `Bearer ${userId}`;

      const response = await api.get("/me");

      const user = response.data.result;

      console.log(user);
      if (user && user?.hasFinishedOnboarding) {
        await api.post(`/auth/authenticate`);

        return {
          redirect: {
            destination: pagesURLConsts.dashboard,
            permanent: false,
          },
        };
      }

      if (!user) {
        try {
          await api.post("/auth/register");
        } catch (error: any) {
          const errorMessage = error.response.data.message;
          addErrorNotification(
            errorMessage || "Erro ao tentar criar um usuário"
          );
        }
      }
    } else {
      removeCookie(context, appConsts.cookieKey);
      return {
        redirect: {
          destination: pagesURLConsts.login,
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
}
