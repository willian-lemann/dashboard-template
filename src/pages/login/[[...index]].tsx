import { authConsts } from "@/utils/constants/auth-consts";
import { withGuest } from "@/utils/with-guest";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <SignIn
      path={authConsts.signInUrl}
      signUpUrl={authConsts.signupUrl}
      afterSignInUrl={authConsts.afterSignInUrl}
      redirectUrl={authConsts.afterSignInUrl}
      appearance={{
        elements: {
          footer: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: 30,
          },

          footerPages: {
            position: "absolute",
            bottom: 30,
            left: "25%",
            translate: "-25%, -25%",
          },
        },
        layout: {
          shimmer: true,
          helpPageUrl: "/ajuda",
          termsPageUrl: "/termos",
          privacyPageUrl: "/privacidade",
        },

        variables: {
          colorPrimary: "#8257e6",
          borderRadius: "3px",
        },
      }}
    />
  );
}

export const getServerSideProps = withGuest(async () => {
  return {
    props: {},
  };
});
