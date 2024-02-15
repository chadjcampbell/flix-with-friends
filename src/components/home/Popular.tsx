"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type popularMoviesProps = {
  popularMovies: any;
};
// TODO - Type API response

export default function Popular({ popularMovies }: popularMoviesProps) {
  console.log(popularMovies);

  return (
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Navigation, Pagination, A11y]}
      effect="fade"
      navigation
      pagination={{
        clickable: true,
      }}
      className="mySwiper w-full h-full"
    >
      {popularMovies.results.map((movie: any) => (
        <SwiperSlide key={movie.id}>
          <Image
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            fill
            className="object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
