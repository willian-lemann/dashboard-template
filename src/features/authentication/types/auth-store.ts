import { User } from "./user";

export type AuthStore = {
  user: User | null;
  getCurrentUser(): Promise<void>;
};
