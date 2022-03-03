import React from "react";
import { Carousel, thead, tr, td, tbody } from "react-bootstrap";
const DataList = ({ DataName }) => {
  console.log(DataName);

  return (
    <div>
      {DataName.length !== 0 &&
        DataName.camping.map((data) => {
          const { id, name, thumbnail, description, price } = data;
          return (
            <>
              <div
                className={id}
                key={id}
                style={{ paddingTop: "25%", color: "black" }}
              ></div>
              <Carousel fade>
                <Carousel.Item style={{ backgroundColor: "white" }}>
                  <img src={thumbnail} alt="" style={{ width: "50%" }} />
                  <Carousel.Caption>
                    <div style={{ paddingTop: "5%" }}>
                      <h2>{data.id}</h2>
                      <h2>{description}</h2>
                      <h3>{price}</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "white" }}>
                  <img src={thumbnail} alt="" style={{ width: "50%" }} />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "white" }}>
                  <img src={thumbnail} alt="" style={{ width: "50%" }} />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              {/* <div className={id} key={id} style={{ paddingTop: "25%" }}>
                <img src={thumbnail} alt="" style={{ width: "50%" }} />
                <div style={{ paddingTop: "5%" }}>
                  <h2>{data.id}</h2>
                  <h2>{description}</h2>
                  <h3>{price}</h3>
                </div>
              </div> */}
            </>
          );
        })}
    </div>
  );
};

export default DataList;
