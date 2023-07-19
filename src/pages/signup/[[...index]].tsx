import { authConsts } from "@/utils/constants/auth-consts";
import { withGuest } from "@/utils/with-guest";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <SignUp
      path={authConsts.signupUrl}
      afterSignUpUrl={authConsts.afterSignupUrl}
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
          helpPageUrl: "/ajuda",
          shimmer: true,
          termsPageUrl: "/termos",
          privacyPageUrl: "/privacidade",
        },
        variables: {
          colorPrimary: "#8257e6",
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
