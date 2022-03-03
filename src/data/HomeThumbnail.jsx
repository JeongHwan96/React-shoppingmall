import React from "react";

const DataList = ({ DataName }) => {
  console.log(DataName);

  return (
    <div>
      {DataName.length !== 0 &&
        DataName.winter.map((data) => {
          const { id, name, thumbnail, description, price } = data;
          return (
            <div className={id} key={id} style={{ paddingTop: "10%" }}>
              <img src={thumbnail} alt="" style={{ width: "50%" }} />
              <div style={{ paddingTop: "5%" }}>
                <h2>{data.id}</h2>
                <h2>{description}</h2>
                <h3>{price}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DataList;
