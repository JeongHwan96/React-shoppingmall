import React from "react";
import ModalFrame from "./modalFrame";
import { Link } from "react-router-dom";
import "../scss/style.scss";
const ProjectModal = ({ _handleModal }) => {
  return (
    <ModalFrame _handleModal={_handleModal}>
      <h1 style={{ color: "white" }}>정상적으로 담아졌습니다</h1>
      <Link to="/cart">
        {" "}
        <div
          className="modalbutton"
          style={{
            color: "white",
            position: "absolute",
            margin: "20% 0 0 -30% ",
            border: "2px solid #fff",
            borderRadius: "13px",
            padding: "5%",
            width: "25%",
            fontWeight: "700",
          }}
        >
          장바구니로 가기
        </div>
      </Link>
      <Link to="/">
        {" "}
        <div
          className="modalbutton"
          style={{
            color: "white",
            position: "absolute",
            margin: "20% 0 0 5% ",
            border: "2px solid #fff",
            borderRadius: "13px",
            padding: "5%",
            width: "25%",
            fontWeight: "700",
          }}
        >
          메인화면으로 가기
        </div>
      </Link>
    </ModalFrame>
  );
};

export default ProjectModal;
