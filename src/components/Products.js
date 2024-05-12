import React, { useState, useEffect } from "react";
import axios from "axios";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");

      console.log(result.data);
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    console.log("product>>>>>>", product)
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button onClick={() => handleAdd(product)} className="btn">add to cart</button>

        </div>
      ))}
    </div>
  );
};

export default Products;
