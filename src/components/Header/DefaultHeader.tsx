import Link from "next/link";
import { Header } from ".";
import { User } from "@/features/authentication/types/user";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "@/features/authentication/hooks/use-auth";

type DefaultHeaderProps = {
  isSignedIn: boolean;
};

const navigation = [
  { name: "Comprar", href: "/" },
  { name: "Vender", href: "/" },
  { name: "PropTech", href: "/" },
  { name: "Sobre", href: "/sobre" },
];

export function DefaultHeader({ isSignedIn }: DefaultHeaderProps) {
  const router = useRouter();
  const { user } = useAuth();

  function handleGoProfile() {
    router.push("/dashboard");
  }

  return (
    <Header.Root isSignedIn={Boolean(isSignedIn)}>
      <Header.Navigations>
        <Header.Logo />
        <Header.Navigation className="text-white" navigation={navigation} />
        <Header.Actions>
          <div className="text-white">
            {isSignedIn ? (
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6"
              >
                Entrar
              </Link>
            ) : (
              <Link href="/login" className="text-sm font-semibold leading-6">
                Fazer login
              </Link>
            )}
          </div>

          <div className="flex -space-x-1 text-white overflow-hidden">
            {user?.avatar ? (
              <div
                className="relative h-8 w-8 rounded-full cursor-pointer"
                onClick={handleGoProfile}
              >
                <Image
                  className="inline-block h-6 w-6 rounded-full"
                  src={user?.avatar}
                  alt="profile avatar"
                  fill
                />
              </div>
            ) : null}
          </div>
        </Header.Actions>
      </Header.Navigations>
    </Header.Root>
  );
}
