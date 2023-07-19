import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCurrentUserService } from "../services/get-current-user";
import { create } from "@/lib/store";
import { AuthStore } from "../types/auth-store";

export const authStore = create<AuthStore>((set, get) => ({
  user: null,

  getCurrentUser: async () => {
    try {
      const response = await getCurrentUserService();

      if (response.data.success) {
        set({ user: response.data.result });
      }
    } catch (error) {}
  },
}));

export function useAuth() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const { signOut } = useClerk();

  const { user, getCurrentUser } = authStore((state) => ({
    user: state.user,
    getCurrentUser: state.getCurrentUser,
  }));

  async function logout() {
    await signOut();

    authStore.setState({ user: null });
    router.replace("/login");
  }

  useEffect(() => {
    async function loadCurrentUser() {
      await getCurrentUser();
    }

    loadCurrentUser();
  }, []);

  return {
    user,
    isSignedIn,
    logout,
  };
}
