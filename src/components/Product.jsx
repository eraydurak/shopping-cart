import React from "react";
import "./Product.scss";

const Product = ({ product, basket, setBasket }) => {
  const addBasket = () => {
    setBasket([...basket, product]);
  };

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <div className="price">
        <p>{product.price} &#x20BA;</p>
      </div>
      <div className="actions">
        <button>Çıkart</button>
        <span className="amount">0</span>
        <button onClick={addBasket}>Ekle</button>
      </div>
    </div>
  );
};

export default Product;
