import React from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button, Box, Grid2 as Grid, Paper } from "@mui/material";

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.18; // 18% GST
  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const orderInfo = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(orderInfo));
    navigate("/process/payment");
  };

  return (
    <>
      <CheckoutSteps activeStep={1} />
      <Box mt={4} px={{ xs: 2, md: 8 }}>
        <Grid container spacing={4}>
          {/* Shipping Info Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="p-6 h-full">
              <Typography variant="h6" className="font-semibold mb-4">
                Shipping Info
              </Typography>
              <div className="space-y-2">
                <div>
                  <p className="font-bold">Name:</p>
                  <span>{shippingInfo.name}</span>
                </div>
                <div>
                  <p className="font-bold">Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p className="font-bold">Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </Paper>
          </Grid>

          {/* Cart Items Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="p-6 h-full">
              <Typography variant="h6" className="font-semibold mb-4">
                Your Cart Items:
              </Typography>
              <div className="space-y-4">
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      key={item.product}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <Link
                        to={`/product/${item.product}`}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span>
                        {item.quantity} X ${item.price} = $
                        {item.price * item.quantity}
                      </span>
                    </div>
                  ))}
              </div>
            </Paper>
          </Grid>
        </Grid>

        {/* Order Summary Section */}
        <Box mt={4}>
          <Paper elevation={3} className="p-6">
            <Typography variant="h6" className="font-semibold mb-4">
              Order Summary
            </Typography>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Subtotal:</p>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Shipping Charges:</p>
                <span>${shippingCharges}</span>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">GST (18%):</p>
                <span>${tax}</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 font-bold">
              <p>Total:</p>
              <span>${totalPrice}</span>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={proceedToPayment}
              className="w-full mt-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Proceed To Payment
            </Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmOrder;
