import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "./Movie.scss";

export default function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview }
  } = props; //doble destructuring
  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
      }}
    >
      <div className="movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary"> Ver Mas...</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
