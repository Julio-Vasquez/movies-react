import React from "react";
import { List, Avatar, Button } from "antd";
import { BG } from "./../../util/constants/constants";
import { Link } from "react-router-dom";

import "./RenderMovie.scss";

export default function RenderMovie(props) {
  const { Item } = List;
  return (
    <Item className="movie-render__movie">
      <Link to={`/movie/${props.movie.id}`} className="movie-render__link">
        <Item.Meta
          avatar={<Avatar src={`${BG}${props.movie.poster_path}`} />}
          title={props.movie.title}
        />
      </Link>
      <Link to={`/movie/${props.movie.id}`}>
        <Button type="primary" icon="right" />
      </Link>
    </Item>
  );
}
