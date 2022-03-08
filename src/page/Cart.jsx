import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
    const count = sessionStorage.getItem("count")
    const price = sessionStorage.getItem("price")
    const name = sessionStorage.getItem("name")
    const total = count * price
  return (
      <>
<button><Link to="/">메인화면</Link></button>
<Table striped bordered hover>
  <thead>
    <tr>
      <th><input type="checkbox"/></th>
      <th>상품 이미지</th>
      <th>상품 이름</th>
      <th>수량</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th><input type="checkbox"/></th>
      <td><img src={sessionStorage.getItem("image")} alt="" style={{width:"20%"}} /></td>
      <td>{name}</td>
      <td>{count}</td>
      <td>{price}*{count}</td>
    </tr>
    <tr>
    <th><input type="checkbox"/></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    <th><input type="checkbox"/></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    <th><input type="checkbox"/></th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td colSpan={5}>총 가격:{price}</td>
    </tr>
  </tbody>
</Table>

    
   <div>
    
     
     
   
   </div>
   </>
  );
}
export default Cart;

{
  /* <Route path="/" exact component={} /> 이 방식은 현재 react-router-dom 이 최신 버전(6.x.x)으로 업데이트 되어 사용시 에러가 나타남 그래서 이전 버전으로 받아서 사용함 */
}
