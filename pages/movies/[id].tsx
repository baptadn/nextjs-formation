import { useRouter } from "next/router";
import React from "react";

const MoviesDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Movies detail page #{id}</div>;
};

export default MoviesDetail;
