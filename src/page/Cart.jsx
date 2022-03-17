import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState();
  // TODO: 장바구니 상품의 총 가격 계산하는 로직을 구현해보세요!
  const [totalPrice, setTotalPrice] = useState(0);

  //개별 가격
  const [price, setPrice] = useState();

  useEffect(() => {
    setCartFromSession();
    if (cart) {
      calculateTotalPrice();
    }
  }, []);

  const setCartFromSession = () => {
    // 스토리지에서 장바구니 정보 불러옴
    const cart = sessionStorage.getItem("cart");
    // 있으면 cart state에 담아줌
    if (cart) {
      setCart(JSON.parse(cart));
    }
  };

  const calculateTotalPrice = () => {
    let sumPrice = 0;
    cart.forEach((cartItem) => {
      sumPrice += cartItem.product.price * cartItem.count;
    });
    setTotalPrice(sumPrice);
    console.log(sumPrice);
  };

  return (
    <>
      <button>
        <Link to="/">메인화면</Link>
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>상품 이미지</th>
            <th>상품 이름</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* Map으로 하나씩 출력 */}
          {cart &&
            cart.map((cartItem) => (
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <td>
                  <img
                    src={cartItem.product.thumbnail}
                    alt=""
                    style={{ width: "20%" }}
                  />
                </td>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.count}</td>
                <td>{cartItem.product.price * cartItem.count}</td>
              </tr>
            ))}
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td colSpan={5}>총 가격:{totalPrice}</td>
          </tr>
        </tbody>
      </Table>

      <div></div>
    </>
  );
}
export default Cart;

{
  /* <Route path="/" exact component={} /> 이 방식은 현재 react-router-dom 이 최신 버전(6.x.x)으로 업데이트 되어 사용시 에러가 나타남 그래서 이전 버전으로 받아서 사용함 */
}
