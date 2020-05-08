import React, { Fragment, useState } from "react";
import { Row, Col, Button } from "antd";
import { BG } from "./../../util/constants/constants";
import useFetch from "./../../util/hooks/useFetch";
import { URL_API, TOKEN } from "./../../util/constants/constants";
import ModalVideo from "./../ModalVideo";

import "./SpecifyMovie.scss";

export default function SpecifyMovie(props) {
  const movie = useFetch(
    `${URL_API}/${props.id}/videos?api_key=${TOKEN}&language=es-CO`
  );
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const openModal = () => setIsVisibleModal(true);

  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (movie.result && movie.result.results.length > 0) {
      return (
        <Fragment>
          <Button icon="play-circle" onClick={openModal}>
            Trailer
          </Button>

          <ModalVideo
            videoKey={movie.result.results[0].key}
            videoPlatform={movie.result.results[0].site}
            isOpen={isVisibleModal}
            close={closeModal}
          />
        </Fragment>
      );
    }
  };
  return (
    <div
      className="specify-movie"
      style={{
        backgroundImage: `url(${BG}${props.movie.result.backdrop_path})`,
      }}
    >
      <div className="specify-movie__dark" />
      <Row>
        <Col span={8} offset={3} className="specify-movie__poster">
          <div
            style={{
              backgroundImage: `url(${BG}${props.movie.result.poster_path})`,
            }}
          />
        </Col>
        <Col className="specify-movie__info" span={10}>
          <Fragment>
            <div className="specify-movie__info-header">
              <h1>{props.movie.result.title}</h1>
              {renderVideo()}
            </div>
            <div className="specify-movie__info-year">
              <span>{props.movie.result.release_date}</span>
            </div>
            <div className="specify-movie__info-content">
              <h3>Informacion General</h3>
              <p>{props.movie.result.overview}</p>
              <h3>Generos</h3>
              <ul>
                {props.movie.result.genres.map((gender) => (
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
