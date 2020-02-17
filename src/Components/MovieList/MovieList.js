import React from "react";
import { List } from "antd";
import Loading from "./../Loading";
import RenderMovie from "./../RenderMovie";

import "./MovieList.scss";

export default function MovieList(props) {
  const { movies } = props;
  if (movies.loading || !movies.result) return <Loading />;

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{props.title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={movie => <RenderMovie movie={movie} />}
    />
  );
}
