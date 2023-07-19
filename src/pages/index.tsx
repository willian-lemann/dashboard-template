import { Header } from "@/components/Header";
import { Hero } from "@/features/landing/Hero";
import { FeatureSection } from "@/features/landing/FeatureSection";
import { PlatformStats } from "@/features/landing/PlatformStats";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { Footer } from "@/features/landing/Footer";
import Link from "next/link";
import { authStore, useAuth } from "@/features/authentication/hooks/use-auth";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  { name: "Comprar", href: "/" },
  { name: "Vender", href: "/" },
  { name: "PropTech", href: "/" },
  { name: "Sobre", href: "/sobre" },
];

type LandingProps = {
  isSignedIn: boolean;
};

export default function Landing({ isSignedIn }: LandingProps) {
  const router = useRouter();
  const { user } = useAuth();

  function handleGoProfile() {
    router.push("/dashboard");
  }

  return (
    <div className="bg-white">
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
                  className="relative h-6 w-6 rounded-full cursor-pointer"
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

      <Hero />
      <FeatureSection />
      <PlatformStats />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const auth = getAuth(context.req);

  return {
    props: {
      isSignedIn: Boolean(auth.userId),
    },
  };
};
