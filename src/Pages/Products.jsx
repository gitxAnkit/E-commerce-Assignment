import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProductsInCategory,
  getProducts,
} from "../features/products/productAction";
import { clearErrors } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();

  const { products, categories, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
      return;
    }
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch, error]);

  if (loading) return <Loader />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>

      {/* Categories Section */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap space-x-2 space-y-2 sm:space-y-0">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={() => dispatch(getProducts())}
            disabled={loading}
          >
            {loading ? "Loading..." : "All"}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={() => dispatch(getProductsInCategory({ category }))}
              disabled={loading}
            >
              {loading ? "Loading..." : category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
