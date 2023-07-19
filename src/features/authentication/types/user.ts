import { User as UserPrismaModel } from "@prisma/client";

export type User = {
  id: string;
  avatar: string;
  name: string;
  email: string;
  cpf: string | null;
  userId: string;
  isVerified: boolean;
  hasFinishedOnboarding: boolean;
  hasAcceptedContractTerms: boolean;
  lastTimeVerified: Date;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  role: null;
};
