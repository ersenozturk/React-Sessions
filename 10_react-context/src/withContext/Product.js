import React, { useContext } from "react";
import { MyProductContext } from "./ProductContext";

const Product = ({ myProduct }) => {
  const { increasePrice, decreasePrice } = useContext(MyProductContext);

  return (
    <div>
      <br />
      <h3>PRODUCT LIST MY PACKET</h3>
      <h4>{myProduct.productName}</h4>
      <h4>{myProduct.price}</h4>
      <button type="submit" onClick={() => increasePrice(myProduct.id)}>
        Increase
      </button>
      <button type="submit" onClick={() => decreasePrice(myProduct.id)}>
        Decrease
      </button>
      <hr />
    </div>
  );
};

export default Product;
