import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { Navigation, Pagination } from "swiper";

type CarouselProps = {
  images?: string[];
};

export function Carousel({ images }: CarouselProps) {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={1}
      spaceBetween={20}
      pagination
      navigation
      modules={[Navigation, Pagination]}
      className="h-full w-full px-4"
    >
      {images?.map((image) => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            className="object-cover rounded-l-md"
            alt="imagem do apartamento"
            fill
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
