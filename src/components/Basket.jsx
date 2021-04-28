import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, resetBasket, products, total }) => {
  return (
    <>
      {basket &&
        basket.map((item) => (
          <BasketItem
            product={products.find((p) => p.id === item.id)}
            item={item}
          />
        ))}
      <div>
        <h3>Toplam: {total}TL</h3>
      </div>
      <button onClick={resetBasket}>Reset</button>
    </>
  );
};

export default Basket;
