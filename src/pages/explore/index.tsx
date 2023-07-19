import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import { Map } from "@/features/explore/components/Map";
import { PropertyItem } from "@/features/explore/components/PropertyItem";
import { PropertyCard } from "@/features/property/components/PropertyCard";
import { useFetchAllProperties } from "@/features/property/hooks/use-fetch-all-properties";
import { propertiesStore } from "@/features/property/hooks/use-properties";
import { classnames } from "@/utils/classnames";

import { getAuth } from "@clerk/nextjs/server";
import { HeartIcon } from "lucide-react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

type ExplorePageProps = { isSignedIn: boolean };

const navigation = [
  { name: "Comprar", href: "/" },
  { name: "Vender", href: "/" },
  { name: "PropTech", href: "/" },
  { name: "Sobre", href: "/sobre" },
];

export default function ExplorePage({ isSignedIn }: ExplorePageProps) {
  const {
    properties: propertiesData,
    isFetched,
    isLoading,
  } = useFetchAllProperties();
  const { user } = useAuth();
  const router = useRouter();

  const properties = propertiesStore((state) => state.properties);

  const isLoadingMap = isLoading || properties.length === 0;

  function handleGoDashboard() {
    router.push("/dashboard");
  }

  useEffect(() => {
    if (isFetched) {
      propertiesStore.setState({
        properties: propertiesData,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched]);

  return (
    <div>
      <Header.Root
        isSignedIn={isSignedIn}
        className="relative flex items-center"
      >
        <Header.Logo />

        <Header.Navigations>
          <Header.Navigation navigation={navigation} />
        </Header.Navigations>

        <Header.Actions>
          <div className="text-zinc-800">
            {isSignedIn ? (
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6"
              >
                Bem-vindo, {user?.name}
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
                onClick={handleGoDashboard}
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
      </Header.Root>

      <div className="grid grid-cols-[1fr_40%] h-[calc(100vh-76px)]">
        <div className="relative">
          <Map isLoading={isLoadingMap} propertiesResult={properties} />
        </div>

        <div className="pt-4 relative flex flex-col">
          <div className="px-4 my-0 bg-white">
            <h3
              className={classnames(
                !isLoading ? "bg-gray-300 text-opacity-" : ""
              )}
            >
              Listando {properties.length} propriedades em{" "}
              <span className="font-bold">Imbituba</span>
            </h3>
          </div>

          <ul className="mt-10 px-4 overflow-auto h-[570px] relative">
            {properties.map((property) => (
              <PropertyItem key={property.id} property={property} />
            ))}
          </ul>
        </div>
      </div>
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
