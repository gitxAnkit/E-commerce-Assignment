import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[65vh] bg-white p-4 rounded-lg shadow-lg">
      <Typography variant="h4" className="text-green-600 font-bold mb-4">
        Payment Successful!
      </Typography>
      <Typography variant="body1" className="text-gray-700 mb-6 text-center">
        Thank you for your payment. Your order has been placed successfully.
      </Typography>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;
