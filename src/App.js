import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import product from "./page/product";
import product_detail from "./page/ProductDetail";
import shopping_cart from "./page/shopping_cart";
import modal from "./components/modal";
import Data from "./data/Data";
function App() {
  return (
    <BrowserRouter basename="jeongkim.github.io">
      <Route path="/" exact component={Home} />
      <Route path="/product_detail" component={product_detail} />
      <Route path="/shopping_cart" component={shopping_cart} />
      <Route path="/modal" component={modal} />
      <Route path="/product" component={product} />
      <Route path="/data" component={Data} />
    </BrowserRouter>
  );
}
export default App;

{
  /* <Route path="/" exact component={} /> 이 방식은 현재 react-router-dom 이 최신 버전(6.x.x)으로 업데이트 되어 사용시 에러가 나타남 그래서 이전 버전으로 받아서 사용함 */
}
