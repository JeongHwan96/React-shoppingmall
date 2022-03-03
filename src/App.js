import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import product_detail from "./page/ProductDetail";
import modal from "./components/modal";
import Data from "./data/Data";
import Cart from "./data/Cart";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/product_detail" component={product_detail} />
      <Route path="/modal" component={modal} />
      <Route path="/data" component={Data} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}
export default App;

{
  /* <Route path="/" exact component={} /> 이 방식은 현재 react-router-dom 이 최신 버전(6.x.x)으로 업데이트 되어 사용시 에러가 나타남 그래서 이전 버전으로 받아서 사용함 */
}
