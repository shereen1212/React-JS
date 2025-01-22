import React from "react";
function ProductDetails({ productName, price, description }) {
  return (
    <div className="product-card">
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductDetails;