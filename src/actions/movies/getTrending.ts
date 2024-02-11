export default async function getTrendingMovies() {
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
