import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100),
}));

function App() {
  const [counter, setCounter] = useState(0);

  // useMemo: Optimizes expensive total price calculation
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return productsData.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [productsData]);

  // useCallback: Prevents function recreation on every render
  const handleProductSelect = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <ProductList
        products={productsData}
        onSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
