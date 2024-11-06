import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="cart-item-card flex items-center space-x-4 p-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-contain"
      />
      <div className="flex-1">
        <Link
          to={`/product/${item.product}`}
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-600">{`Price: ₹${item.price}`}</p>
      </div>
      <button
        onClick={() => deleteCartItems(item.product)}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Remove
      </button>
    </div>
  );
};

CartItemCard.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  deleteCartItems: PropTypes.func.isRequired,
};

export default CartItemCard;
