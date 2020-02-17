import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import Movie from "./../Movie";
import Loading from "./../Loading";

import "./SliderMovies.scss";

export default function SliderMovies(props) {
  const { movies } = props;
  if (movies.loading || !movies.result) return <Loading />;
  const { results } = movies.result;
  return (
    <Carousel autoplay className="slider-movies">
      {results.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

SliderMovies.propTypes = {
  movies: PropTypes.object.isRequired
};
