import React from "react";
import ErrorBoundary from "../app/ErrorBoundary";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <ErrorBoundary>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white mx-5 hover:text-yellow-300"
        >
          E-Commerce
        </Link>

        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="/cart"
          className="flex items-center text-white hover:text-yellow-300 transition duration-300"
        >
          <FaShoppingCart className="mr-2" />
          Cart
        </Link>
      </nav>
    </ErrorBoundary>
  );
};

export default NavBar;
