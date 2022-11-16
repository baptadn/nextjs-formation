import httpClient from "../core/httpClient";
import Image from "next/image";
import MovieCard from "../components/MovieCard";

export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface IProps {
  movies: IMovie[];
}

export default function Trending({ movies }: IProps) {
  return (
    <div className="py-6">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Trending Movies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hot movies right now in you living room 🍿
          </p>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await httpClient.get("/movie/popular");

  return {
    props: {
      movies: response.data.results,
    },
  };
};
