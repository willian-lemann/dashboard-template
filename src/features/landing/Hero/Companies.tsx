import { appConsts } from "@/utils/constants/app-consts";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export function Companies() {
  const companiesAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  return (
    <animated.div
      style={companiesAnimation}
      className="mx-auto text-white mt-[7rem] container"
    >
      <div className="mx-auto mt-2 flex items-center gap-4">
        <div className="relative h-[36px] w-[158px]">
          <Image
            className="max-h-12 w-full object-contain"
            src={`${appConsts.websiteCDN}/ef0af8fe-84e6-4aea-5ec4-14a23906b000/public`}
            alt="Open Finance"
            fill
            priority
          />
        </div>

        <div className="relative h-[36px] w-[158px] ">
          <Image
            className="max-h-12 w-full object-contain"
            src={`${appConsts.websiteCDN}/1a54e736-0123-43f6-f00d-33adf867ef00/public`}
            alt="Serpro"
            fill
            priority
          />
        </div>

        <div className="relative h-[30px]  w-[158px]">
          <Image
            className=" max-h-12 w-full object-contain"
            src={`${appConsts.websiteCDN}//ea42aa3e-915c-446f-2e6c-fd8dd6cd9300/public`}
            alt="Onr"
            fill
            priority
          />
        </div>

        <div className="relative h-[30px]  w-[158px]">
          <Image
            className=" max-h-12 w-full object-contain"
            src={`${appConsts.websiteCDN}/16d09b64-a09a-4da4-ffe1-d73cf2cea200/public`}
            alt="Saec"
            fill
            priority
          />
        </div>

        <div className="relative h-[36px] w-[158px] ">
          <Image
            className="max-h-12 w-full object-contain"
            src={`${appConsts.websiteCDN}/3f95584e-0492-4424-b6e2-f8e8f0312e00/public`}
            alt="Serpro"
            fill
            priority
          />
        </div>
      </div>
    </animated.div>
  );
}
