import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Product = () => {
  const productData = useContext(ProductDataContext);

  let renderData = "Loading...";

  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => {
      return (
        <Link key={idx} to={`/products/${elem.id}`}>
          <div className="product">
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      );
    });
  }

  return <div className="allProducts">{renderData}</div>;
};

export default Product;
