import { Card } from "@nextui-org/react";
import Image from "next/image";

async function getTrendingMovies() {
  try {
    const url = `${process.env.TMDB_URL}/trending/movie/day?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_KEY}`,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Trending() {
  const movies = await getTrendingMovies();
  console.log(movies);

  return (
    <div className="flex gap-2 overflow-hidden">
      {movies.results.map((movie: any) => (
        <Card key={movie.id} radius="lg" className="border-none">
          <Image
            alt={movie.title}
            className="object-cover"
            height={200}
            src={`${process.env.TMDB_URL}${movie.poster_path}`}
            width={200}
          />
        </Card>
      ))}
    </div>
  );
}
