"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export const Partner = () => {
  const logos = [
    { src: "/aitch.systems_black.png", alt: "Aitch Systems Logo" },
    { src: "/drawlie_black.png", alt: "Drawlie Logo" },
    { src: "/flowers_black.png", alt: "Flowers Logo" },
    { src: "/skrime_black.png", alt: "Skrime Logo" },
    { src: "/aitch.systems_black.png", alt: "Aitch Systems Logo" },
    { src: "/drawlie_black.png", alt: "Drawlie Logo" },
    { src: "/flowers_black.png", alt: "Flowers Logo" },
    { src: "/skrime_black.png", alt: "Skrime Logo" },
  ];

  return (
    <div className="mb-20 flex flex-col items-center">
      <p className="text-[16px] tracking-tight mb-5 text-center text-gray-500 font-medium mt-10">
        WIR VERTRAUEN AUF
      </p>
      <h1 className="text-5xl text-center text-black font-bold mb-10">
        Unsere Partner
      </h1>

      <div className="w-[80%] lg:w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          loop={true} // loop infinito
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full "
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx} className="flexjustify-center lg:mt-10 mb-48">
              <Image className="mx-auto" src={logo.src} width={150} height={150} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
