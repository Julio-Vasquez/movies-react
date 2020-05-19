import React from "react";
import { Col } from "antd";
import MovieCard from "./../MovieCard";

import "./MovieCatalog.scss";

export default function MovieCatalog(props) {
  //const { movies: { results } } = props;

  const { results } = props.movies;

  return results.map((movie) => (
    <Col key={movie.id} xs={4} className="movie-catalog" span={24}>
      <MovieCard movie={movie} />
    </Col>
  ));
}
