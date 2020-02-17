import React, { Fragment } from "react";
import useFetch from "../../util/hooks/useFetch";
import SliderMovies from "./../../Components/SliderMovies";
import { URL_API, TOKEN } from "./../../util/constants/constants";

export default function Home() {
  const movies = useFetch(
    `${URL_API}/now_playing?api_key=${TOKEN}&language=es-CO&page=1`
  );

  console.log(typeof movies);

  return (
    <Fragment>
      <SliderMovies movies={movies} />
    </Fragment>
  );
}
