"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type popularMoviesProps = {
  popularMovies: any;
};
// TODO - Type API response

export default function Popular({ popularMovies }: popularMoviesProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={15}
      slidesPerView={"auto"}
      navigation
    >
      {popularMovies.results.map((movie: any) => (
        <SwiperSlide key={movie.id} className="!w-48">
          <Card radius="lg" className="border-none">
            <Image
              alt={movie.title}
              height={288}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMG}${movie.poster_path}`}
              width={192}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
