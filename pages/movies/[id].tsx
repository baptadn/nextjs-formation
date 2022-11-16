import { GetServerSidePropsContext } from "next";
import React from "react";
import httpClient from "../../core/httpClient";
import { IMovie } from "../trending";

interface IProps {
  movie: IMovie;
}

const MoviesDetail = ({ movie }: IProps) => {
  return (
    <div className="py-6">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            {movie.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id;
  const response = await httpClient.get(`/movie/${id}`);

  return {
    props: {
      movie: response.data,
    },
  };
};

export default MoviesDetail;
