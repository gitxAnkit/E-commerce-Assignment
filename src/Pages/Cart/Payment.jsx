import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CheckoutSteps from "../Cart/CheckoutSteps";
import ErrorBoundary from "../../app/ErrorBoundary";

const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const payBtn = useRef(null);
  const navigate = useNavigate();

  const storedOrderInfo = sessionStorage.getItem("orderInfo");
  const orderInfo = storedOrderInfo
    ? JSON.parse(storedOrderInfo)
    : { totalPrice: 0 };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    payBtn.current.disabled = true;

    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful!");
      navigate("/success");
    }, 2000);
  };

  return (
    <>
      <ErrorBoundary>
        <CheckoutSteps activeStep={2} />
        <div className="flex justify-center items-center bg-white h-[65vh] p-4 rounded-lg shadow-lg">
          <form className="w-full max-w-md space-y-6" onSubmit={submitHandler}>
            <Typography variant="h5" className="text-center text-gray-700">
              Card Info
            </Typography>
            <div className="flex items-center space-x-2">
              <CreditCardIcon className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Card Number"
                className="paymentInput w-full p-4 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <EventIcon className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="paymentInput w-full p-4 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <VpnKeyIcon className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="CVC"
                className="paymentInput w-full p-4 border border-gray-300 rounded-md"
                required
              />
            </div>

            <input
              type="submit"
              value={
                isProcessing ? "Processing..." : `Pay $${orderInfo.totalPrice}`
              }
              ref={payBtn}
              disabled={isProcessing}
              className="w-full py-3 mt-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 cursor-pointer transition duration-300"
            />
          </form>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Payment;
