import React from "react";
import ModalFrame from "./modalFrame";
import { Link } from "react-router-dom";

const ProjectModal = ({ _handleModal }) => {
  return (
    <ModalFrame _handleModal={_handleModal}>
      <h1 style={{ color: "white" }}>정상적으로 담아졌습니다</h1>
      <Link to="/data">
        {" "}
        <div style={{ color: "white" }}>장바구니로 가기</div>
      </Link>
      <Link to="/">
        {" "}
        <div style={{ color: "white" }}>메인화면으로 가기</div>
      </Link>
    </ModalFrame>
  );
};

export default ProjectModal;
