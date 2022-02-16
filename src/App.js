import { BrowserRouter, Route } from "react-router-dom";
import button from "./components/button";
import home from "./page/home";
import product from "./page/product";
import product_detail from "./page/product_detail";
import shopping_cart from "./page/shopping_cart";

function App() {
  return (
    <BrowserRouter> 
      <Route path="/" exact component={home} />
      <Route path="/product_detail" component={product_detail} />
      <Route path="/shopping_cart" component={shopping_cart} />
      <Route path="/button" component={button} />
      <Route path="/product" component={product} />
    </BrowserRouter>
  );
}
export default App;

{/* <Route path="/" exact component={} /> 이 방식은 현재 react-router-dom 이 최신 버전(6.x.x)으로 업데이트 되어 사용시 에러가 나타남 그래서 이전 버전으로 받아서 사용함 */}