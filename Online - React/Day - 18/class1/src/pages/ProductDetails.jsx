import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);

  const { id } = useParams();

  let selectedData = "Loading...";

  if (productData.length > 0) {
    selectedData = productData.find((elem) => id == elem.id);
  }

  console.log(selectedData);
  return (
    <div>
      <div className="product">
        <img src={selectedData.image} alt="" />
        <h2>{selectedData.title}</h2>
        <h5>{selectedData.price}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
