import React from "react";
import { Table, thead, tr, td, tbody } from "react-bootstrap";
const DataList = ({ DataName }) => {
  console.log(DataName);

  return (
    <>
      <div>
        {DataName.length !== 0 &&
          DataName.camping.map((data) => {
            const { id, name, thumbnail, description, price } = data;
            return (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th style={{ textAlign: "center" }}>상품 이미지</th>
                    <th style={{ textAlign: "center" }}>상품명</th>
                    <th style={{ width: "40%", textAlign: "center" }}>가격</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "0%" }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ width: "40%", textAlign: "center" }}>
                      <img src={thumbnail} alt="" style={{ width: "15%" }} />
                    </td>
                    <td style={{ width: "40%", textAlign: "center" }}>
                      {name}
                    </td>
                    <td style={{ width: "10%", textAlign: "center" }}>
                      {price}
                    </td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <span>합계:{price}</span>
                </tbody>
              </Table>
            );
          })}
      </div>
    </>
  );
};

export default DataList;
