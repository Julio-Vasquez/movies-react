import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./../../util/hooks/useFetch";
import SpecifyMovie from "./../../Components/SpecifyMovie";
import Loading from "./../../Components/Loading";
import { URL_API, TOKEN } from "./../../util/constants/constants";
import "./Movie.scss";

export default function Movie() {
  const { id } = useParams();

  const movie = useFetch(`${URL_API}/${id}?api_key=${TOKEN}&language=es-CO`);

  if (movie.loading || !movie.result) return <Loading />;

  return <SpecifyMovie movie={movie} id={id} />;
}
