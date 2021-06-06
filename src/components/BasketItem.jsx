import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <>
      <div className="basket-result">
        <span>{product.title}</span> x {item.amount} adet
      </div>
    </>
  );
};

export default BasketItem;
