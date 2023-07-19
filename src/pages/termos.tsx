import { Header } from "@/components/Header";
import { useUser } from "@clerk/nextjs";

const navigation = [
  { name: "Explorar", href: "/explore" },
  { name: "Mapa", href: "/" },
  { name: "Entender", href: "#" },
  { name: "Sobre", href: "#" },
];

export default function Terms() {
  const { isSignedIn } = useUser();

  return (
    <div className="h-screen w-screen">
      <Header.Root isSignedIn={Boolean(isSignedIn)}>
        <Header.Navigations>
          <Header.Logo />
          <Header.Navigation navigation={navigation} />
          <Header.Actions />
        </Header.Navigations>
      </Header.Root>

      <div className="mt-20 container">
        <h1>Termos</h1>
      </div>
    </div>
  );
}
