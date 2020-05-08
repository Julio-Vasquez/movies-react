import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

export default function ModalVideo(props) {
  return (
    <Modal
      className="modal-video"
      visible={props.isOpen}
      centered
      onCancel={props.close}
      footer={false}
    >
      this is my modal
    </Modal>
  );
}
