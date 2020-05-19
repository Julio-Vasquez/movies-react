import React from "react";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

export default function MovieCard(props) {
  console.log(props.movie);
  const { id, title, poster_path } = props.movie;
  const { Meta } = Card;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 245 }}
        cover={
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          />
        }
        actions={[<Icon type="eye" key={title} />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
