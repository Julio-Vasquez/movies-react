import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, TOKEN } from "../../util/constants/constants";

import Loading from "./../../Components/Loading";
import MovieCatalog from "./../../Components/MovieCatalog";
import PaginationMovies from "./../../Components/Pagination";

export default function NewMovie() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${URL_API}/now_playing?api_key=${TOKEN}&languaje=es-CO&page=${page}`
      );
      const movie = await res.json();
      setMovieList(movie);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, color: "#001529" }}>Ultimos Lanzamientos</h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span={24}>
            <PaginationMovies
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </Row>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}
    </Row>
  );
}
