import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCart";
import { getProducts } from "../features/products/productAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div>Home</div>;
};

export default Home;
