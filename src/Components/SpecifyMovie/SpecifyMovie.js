import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { BG } from "./../../util/constants/constants";

import "./SpecifyMovie.scss";

export default function SpecifyMovie(props) {
  return (
    <div
      className="specify-movie"
      style={{
        backgroundImage: `url(${BG}${props.movie.result.backdrop_path})`
      }}
    >
      <div className="specify-movie__dark" />
      <Row>
        <Col span={8} offset={3} className="specify-movie__poster">
          <div
            style={{
              backgroundImage: `url(${BG}${props.movie.result.poster_path})`
            }}
          />
        </Col>
        <Col className="specify-movie__info" span={10}>
          <Fragment>
            <div className="specify-movie__info-header">
              <h1>{props.movie.result.title}</h1>
              <button>Trailer</button>
            </div>
            <div className="specify-movie__info-year">
              <span>{props.movie.result.release_date}</span>
            </div>
            <div className="specify-movie__info-content">
              <h3>Informacion General</h3>
              <p>{props.movie.result.overview}</p>
              <h3>Generos</h3>
              <ul>
                {props.movie.result.genres.map(gender => (
                  <li key={gender.id}>{gender.name}</li>
                ))}
              </ul>
            </div>
          </Fragment>
        </Col>
      </Row>
    </div>
  );
}
