import getTrendingMovies from "@/actions/movies/getTrending";
import Trending from "@/components/home/Trending";
import { Suspense } from "react";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  return (
    <section>
      <h2>Trending</h2>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Trending trendingMovies={trendingMovies} />
      </Suspense>
    </section>
  );
}
