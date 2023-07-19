import { appConsts } from "@/utils/constants/app-consts";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { Companies } from "./Companies";
import { useSpring, animated } from "@react-spring/web";
import { CallToAction } from "../CallToAction";

export function Hero() {
  const headlineTopTextAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 50,
  });

  const headlineTitleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 120,
  });

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-black h-screen">
      <Image
        src={`${appConsts.websiteCDN}/46305a1d-16a3-40a9-1345-2ba0468c0700/public`}
        fill
        alt="Image de uma propriedade"
        className="object-cover opacity-20"
        priority
      />

      <div className="mx-auto z-[9999] relative text-white max-w-2xl py-16 md:pt-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <animated.div
            style={headlineTopTextAnimation}
            className="text-white relative rounded-full px-3 py-1 text-md leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Saiba como comprar e vender imóveis em nossa plataforma
            <a href="#" className="font-semibold text-primary pl-1">
              <span className="absolute inset-0" aria-hidden="true" />
              Saiba mais <span aria-hidden="true">&rarr;</span>
            </a>
          </animated.div>
        </div>
        <animated.div
          style={headlineTitleAnimation}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            E-commerce de imóveis do jeito certo.
          </h1>

          <div className="mt-10 flex items-center justify-center gap-x-6 text-md">
            <CallToAction label="Explorar Imóveis" />

            <div className="flex items-center gap-2 text-white">
              <PlayCircle />

              <a href="#" className="text-sm font-semibold leading-6">
                Começar agora
              </a>
            </div>
          </div>
        </animated.div>

        <Companies />
      </div>
    </div>
  );
}
