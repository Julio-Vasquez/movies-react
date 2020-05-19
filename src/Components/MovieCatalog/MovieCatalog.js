import React from "react";
import { Col } from "antd";
import MovieCard from "./../MovieCard";

import "./MovieCatalog.scss";

export default function MovieCatalog(props) {
  //const { movies: { results } } = props;

  const { results } = props.movies;

  return results.map((movie) => (
    <Col key={movie.id} xs={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}
