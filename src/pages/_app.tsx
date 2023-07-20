import { AuthLayout } from "@/features/authentication/AuthLayout";
import "@/styles/globals.css";
import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

import { Urbanist } from "next/font/google";
import { useRouter } from "next/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const AlertProvider = dynamic(
  () => import("@/components/Alert").then((mod) => mod.AlertProvider),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const fontFamily = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--primary-font",
});

const authPages = ["/login/[[...index]]", "/signup/[[...index]]"];

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isAuth = authPages.includes(pathname);

  // const onlyLandingPagePattern =
  //   /^\/(|\bonboarding\b)(|\bcheckout\b)(|\btermos\b)(|\bprivacidade\b)$/;

  // const shouldNotShowHeader = !onlyLandingPagePattern.test(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      {isAuth ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
      <AlertProvider />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
