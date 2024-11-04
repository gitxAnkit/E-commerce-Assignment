import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./app/ErrorBoundary.jsx";
import NavBar from "./components/NavBar.jsx";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Home from "./components/Home";
const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
