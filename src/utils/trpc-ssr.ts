import superjson from "superjson";

import { appRouter } from "@/server/root";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { Prisma, PrismaClient } from "@prisma/client";

type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  currentUser: string;
};

export function getServerApi(ctx: Context) {
  return createServerSideHelpers({
    router: appRouter,
    ctx,
    transformer: superjson,
  });
}
