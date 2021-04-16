import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

const App = () => {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <>
      <Header money={money} />
      {products.map((product) => (
        <Product basket={basket} setBasket={setBasket} product={product} />
      ))}
    </>
  );
};

export default App;
