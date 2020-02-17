import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { BG } from "./../../util/constants/constants";

import "./Movie.scss";

export default function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview }
  } = props; //doble destructuring
  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(${BG}${backdrop_path})`
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
