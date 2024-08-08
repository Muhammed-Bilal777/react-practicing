// ProductList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleFetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    dispatch(setProducts(data));
  };

  return (
    <div>
      <h1>Product slice</h1>
      <button onClick={handleFetchProducts}>Fetch Products</button>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
