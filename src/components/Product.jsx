import React from "react";
import "./Product.scss";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <div className="price">
        <p>{product.price} &#x20BA;</p>
      </div>
      <div className="actions">
        <button disabled={!basketItem} onClick={removeBasket}>
          Çıkart
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button disabled={total + product.price > money} onClick={addBasket}>
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
