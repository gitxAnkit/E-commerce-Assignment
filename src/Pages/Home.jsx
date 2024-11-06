import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../features/products/productAction";
import { clearErrors } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="min-w-[250px] min-h-[400px] md:min-w-[300px] p-2 transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="relative pb-[100%]">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-[250px] h-[250px] object-contain p-4"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium line-clamp-2 mb-2">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CategoryRow = ({ title, products }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 px-4 capitalize">
        {title.replace(/-/g, " ")}
      </h2>

      <div className="group relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Products container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 px-4"
        >
          {products.map((product) => (
            <>
              <ProductCard key={product.id} product={product} />
              <ProductCard key={product.id + 100} product={product} />
            </>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { products, categories, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch, error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg opacity-90">
            Discover amazing products at great prices
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {categories &&
          categories.map((category, index) => (
            <CategoryRow
              key={index}
              title={category}
              products={products.filter(
                (product) => product.category === category
              )}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
