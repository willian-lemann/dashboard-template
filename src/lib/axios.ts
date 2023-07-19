import { appConsts } from "@/utils/constants/app-consts";

import axios from "axios";

import { parseCookies } from "nookies";

export function setupApi(ctx: any = undefined) {
  const cookies = parseCookies(ctx);

  const token = cookies[appConsts.cookieKey];

  const api = axios.create({
    baseURL: `${appConsts.apiURL}/api`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return api;
}

export const api = setupApi();
