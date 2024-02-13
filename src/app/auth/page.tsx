import getPopularMovies from "@/actions/movies/getPopularMovies";
import getTrendingMovies from "@/actions/movies/getTrendingMovies";
import Popular from "@/components/home/Popular";
import Trending from "@/components/home/Trending";
import { Suspense } from "react";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const trendingMovies = await getTrendingMovies();
  return (
    <>
      {/*       <section>
        <Suspense fallback={<p>Loading popular...</p>}>
          <Popular popularMovies={popularMovies} />
        </Suspense>
      </section> */}
      <section>
        <h2>Trending</h2>
        <Suspense fallback={<p>Loading trending...</p>}>
          <Trending trendingMovies={trendingMovies} />
        </Suspense>
      </section>
    </>
  );
}
