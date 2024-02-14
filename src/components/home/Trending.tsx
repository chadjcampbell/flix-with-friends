"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type trendingMoviesProps = {
  trendingMovies: any;
};
// TODO - Type API response

export default function Trending({ trendingMovies }: trendingMoviesProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={"auto"}
      navigation
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      }}
    >
      {trendingMovies.results.map((movie: any) => (
        <SwiperSlide key={movie.id} className="!w-auto">
          <Image
            alt={movie.title}
            width={185}
            height={278}
            src={`${process.env.NEXT_PUBLIC_TMDB_IMG}${movie.poster_path}`}
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
