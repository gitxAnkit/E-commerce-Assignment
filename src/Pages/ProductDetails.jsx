import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Rating from "@mui/material/Rating";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors } from "../features/products/productSlice";
import ErrorBoundary from "../app/ErrorBoundary";
import { getProductDetails } from "../features/products/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity >= 10) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails({ id }));
  }, [dispatch, id, error]);

  const options = {
    value: product?.rating?.rate || 0,
    readOnly: true,
    precision: 0.5,
  };

  if (loading) return <Loader />;

  return (
    <ErrorBoundary>
      <div className="p-8 bg-gray-50 min-h-screen m-10">
        {product ? (
          <>
            <div className="flex flex-col md:flex-row items-center md:items-start space-x-6">
              <div className="w-full md:w-80 md:h-80 mb-6 md:mb-0 sm:h-40 sm:w-40">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain rounded shadow-md"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                <p className="text-gray-600 mb-2">
                  Category: {product.category}
                </p>
                <div className="flex items-center mb-2">
                  <Rating {...options} />
                  <span className="ml-1 font-light text-sm">
                    ({product?.rating?.count || 0} Reviews)
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  ${product.price}
                </h3>
                <div className="flex items-center mb-4">
                  <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 text-center border mx-2"
                  />
                  <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add to Cart
                </button>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default ProductDetails;
