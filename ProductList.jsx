import React from "react";

function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>

      {products.slice(0, 5).map((product) => (
        <div key={product.id} style={{ marginBottom: "8px" }}>
          {product.name} - ₹{product.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => onSelect(product)}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
