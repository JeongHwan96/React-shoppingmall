import "../scss/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
//style
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
import exam from "./exam.png";
import { useState } from "react";
import styled from "styled-components";
const Home = () => {
  const ListButton = styled.li`
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 60%;
    padding: 6%;
    margin-left: 15px;
    margin-top: 40px;
  `;
  const [showItem, setShowItem] = useState(false);
  const [showItem2, setShowItem2] = useState(false);

  return (
    <div className="container">
      <div className="header container-xl">
        <div className="header-title">tomenco shopping</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          <ul className="header-contents">
            <SwiperSlide>
              <ListButton
                className={`${showItem ? "" : "active"} `}
                onClick={() => setShowItem(false)}
              >
                # 겨울 방한템2
              </ListButton>
            </SwiperSlide>
            <SwiperSlide>
              <ListButton
                className={`${showItem ? "active" : ""} `}
                onClick={() => setShowItem(true)}
              >
                # 겨울 방한템2
              </ListButton>
            </SwiperSlide>
            <SwiperSlide>
              <ListButton
                className={`${showItem2 ? "" : "active"} `}
                onClick={() => setShowItem2(false)}
              >
                # 겨울 방한템2
              </ListButton>
            </SwiperSlide>
            <SwiperSlide>
              <ListButton
                className={`${showItem2 ? "active" : ""} `}
                onClick={() => setShowItem2(true)}
              >
                # 겨울 방한템2
              </ListButton>
            </SwiperSlide>
            <SwiperSlide>
              <li className="winter btn btn-primary"># 겨울 방한템5</li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="winter btn btn-primary"># 겨울 방한템6</li>
            </SwiperSlide>
          </ul>
        </Swiper>
      </div>

      <div className="main_product">
        <Link to="/product_detail">
          <img className="exam" src={exam} alt="예시" />
        </Link>
        <div className="product_desc">
          <h2>
            <b>인증샷을 부르는 춘식이 유리컵1</b>
          </h2>
          <h3>
            안정감있게 쌓을 수 있는 실용적인 디자인에<br></br> 귀여운 춘식이를
            더한 , 금주의 추천 선물이에요
          </h3>
        </div>

        <div className="main_product1">
          <Link to="/product_detail">
            <img className="exam1" src={exam} alt="예시" />
          </Link>
          <div className="product_desc1">
            <h2>
              <b>인증샷을 부르는 춘식이 유리컵1-1</b>
            </h2>
            <h3>
              안정감있게 쌓을 수 있는 실용적인 디자인에<br></br> 귀여운 춘식이를
              더한 , 금주의 추천 선물이에요
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
