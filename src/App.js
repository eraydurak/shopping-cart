import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";
import BasketItem from "./components/BasketItem";

const App = () => {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          total={total}
          money={money}
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          total={total}
          basket={basket}
          products={products}
        />
      )}
    </>
  );
};

export default App;
