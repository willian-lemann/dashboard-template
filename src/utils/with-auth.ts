import { getAuth } from "@clerk/nextjs/server";

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import { appConsts, pagesURLConsts } from "./constants/app-consts";
import { api, setupApi } from "@/lib/axios";
import { addCookie } from "@/lib/cookies";

export function withAuth<P>(fn: GetServerSideProps<any>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { userId } = getAuth(context.req);

    const api = setupApi(context);

    if (!userId) {
      return {
        redirect: {
          destination: pagesURLConsts.login,
          permanent: false,
        },
      };
    }

    api.defaults.headers.Authorization = `Bearer ${userId}`;

    addCookie(context, appConsts.cookieKey, String(userId));

    const response = await api.get("/me");

    const user = response?.data?.result;

    if (!user || !user.hasFinishedOnboarding) {
      return {
        redirect: {
          destination: pagesURLConsts.onboarding,
          permanent: false,
        },
      };
    }

    return await fn(context);
  };
}
