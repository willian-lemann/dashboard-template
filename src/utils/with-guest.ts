import { redirect } from "next/navigation";

import { getAuth, buildClerkProps } from "@clerk/nextjs/server";

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import { pagesURLConsts } from "./constants/app-consts";

import { setupApi } from "@/lib/axios";

export function withGuest<P>(fn: GetServerSideProps<any>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { userId } = getAuth(context.req);

    if (userId) {
      const api = setupApi(context);

      try {
        const response = await api.get("/me");

        const user = response.data.result;

        if (user) {
          if (user?.hasFinishedOnboarding) {
            return {
              redirect: {
                destination: pagesURLConsts.dashboard,
                permanent: false,
              },
            };
          }
        }

        return {
          redirect: {
            destination: pagesURLConsts.onboarding,
            permanent: false,
          },
        };
      } catch (error) {
        return {
          redirect: {
            destination: pagesURLConsts.login,
            permanent: false,
          },
        };
      }
    }

    return await fn(context);
  };
}
