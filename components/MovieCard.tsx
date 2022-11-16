import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMovie } from "../pages/trending";

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="group relative rounded-3xl space-y-6 overflow-hidden">
        <Image
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          width="640"
          height="805"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute z-0 bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
              {movie.title}
            </h4>
            <span className="block text-sm text-gray-500">
              {movie.vote_average}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
