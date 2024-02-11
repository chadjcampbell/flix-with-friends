"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
    <div className="w-dvw">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {trendingMovies.results.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <Card radius="lg" className="border-none">
              <Image
                alt={movie.title}
                className="object-cover"
                height={200}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMG}${movie.poster_path}`}
                width={200}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
