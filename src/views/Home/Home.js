import React, { Fragment } from "react";
import { Col, Row } from "antd";
import useFetch from "../../util/hooks/useFetch";
import { URL_API, TOKEN } from "./../../util/constants/constants";
import SliderMovies from "./../../Components/SliderMovies";
import MovieList from "./../../Components/MovieList";
import Footer from "./../../Components/Footer";

export default function Home() {
  const movies = useFetch(
    `${URL_API}/now_playing?api_key=${TOKEN}&language=es-CO&page=1`
  );

  const populars = useFetch(
    `${URL_API}/popular?api_key=${TOKEN}&language=es-CO&page=1`
  );

  const others = useFetch(
    `${URL_API}/top_rated?api_key=${TOKEN}&language=es-CO&page=1`
  );

  return (
    <Fragment>
      <SliderMovies movies={movies} />
      <Row>
        <Col span={12}>
          <MovieList title="Top Peliculas Populares" movies={populars} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Mejores Peliculas Puntuadas" movies={others} />
        </Col>
      </Row>
      <Footer />
    </Fragment>
  );
}
