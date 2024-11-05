import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  const options = {
    value: product.rating.rate,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link
      className="flex flex-col text-gray-800 no-underline m-2 p-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
      to={`/product/${product.id}`}
    >
      <img
        className="w-36 h-36 object-cover mb-2"
        src={product.image}
        alt={product.title}
      />
      <p className="font-roboto text-lg mb-1">{product.name}</p>
      <div className="flex items-center mb-2">
        <Rating {...options} />
        <span className="ml-1 font-light text-sm">
          ({product.rating.count} Reviews)
        </span>
      </div>
      <span className="text-tomato font-medium text-base">{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
