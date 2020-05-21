import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { URL_API_BASE, TOKEN } from "../../util/constants/constants";

import { withRouter } from "react-router-dom";
import queryString from "query-string";

import MovieCatalog from "./../../Components/MovieCatalog";

import "./SearchMovies.scss";

const SearchMovies = (props) => {
  const { location, history } = props;

  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { m } = searchValue.query;
      const res = await fetch(
        `${URL_API_BASE}/search/movie?api_key=${TOKEN}&languaje=es-CO&query=${m}&page=1`
      );

      const movie = await res.json();
      setSearchValue(m);
      setMovieList(movie);
    })();
  }, [location.search]);
  //console.log(location);

  const onChangeInpuSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.m = e.target.value;
    console.log(urlParams);
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeInpuSearch} />
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
    </Row>
  );
};

export default withRouter(SearchMovies);
