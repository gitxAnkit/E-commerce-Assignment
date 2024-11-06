import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItemCard from "./CartItemCard";
import { addItemsToCart } from "../../features/cart/cartAction";
import { removeCartItem } from "../../features/cart/cartSlice";
import ErrorBoundary from "../../app/ErrorBoundary";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      toast.error("Cannot exceed stock limit");
      return;
    }
    dispatch(addItemsToCart({ id, quantity: newQty }));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty < 1) return;
    dispatch(addItemsToCart({ id, quantity: newQty }));
  };

  const deleteCartItems = (id) => {
    dispatch(removeCartItem(id));
    toast.success("Item removed from cart");
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <ErrorBoundary>
      <Fragment>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <MdRemoveShoppingCart fontSize="large" />
            <Typography variant="h5" className="my-4">
              No Product in Your Cart
            </Typography>
            <Link to="/products" className="text-blue-500 hover:underline">
              View Products
            </Link>
          </div>
        ) : (
          <div className="container mx-auto p-6 bg-white rounded shadow">
            <div className="grid grid-cols-3 text-center font-semibold py-4 border-b">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {cartItems.map((item) => (
              <div
                className="grid grid-cols-3 items-center py-4 border-b"
                key={item.product}
              >
                <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                <div className="flex items-center justify-center">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      decreaseQuantity(item.product, item.quantity)
                    }
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border mx-2"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      increaseQuantity(item.product, item.quantity, item.stock)
                    }
                  >
                    +
                  </Button>
                </div>
                <p className="text-center font-medium">{`$${
                  item.price * item.quantity
                }`}</p>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <div className="flex flex-col items-end">
                <p className="text-lg font-bold">Gross Total:</p>
                <p className="text-xl font-bold text-blue-600">{`$ ${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-4"
                  onClick={checkoutHandler}
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </ErrorBoundary>
  );
};

export default Cart;
