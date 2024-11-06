import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./app/ErrorBoundary.jsx";
import NavBar from "./components/NavBar.jsx";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Shipping from "./Pages/Cart/Shipping.jsx";
import ConfirmOrder from "./Pages/Cart/ConfirmOrder.jsx";
import Payment from "./Pages/Cart/Payment.jsx";
import Success from "./Pages/Cart/Success.jsx";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/process/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
