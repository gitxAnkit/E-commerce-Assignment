import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PinDrop,
  Home,
  LocationCity,
  Public,
  Phone,
  TransferWithinAStation,
} from "@mui/icons-material";
import { Country, State } from "country-state-city";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../../app/ErrorBoundary.jsx";
import { saveShippingInfo } from "../../features/cart/cartSlice.js";
import CheckoutSteps from "./CheckoutSteps.jsx";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo?.address || "");
  const [city, setCity] = useState(shippingInfo?.city || "");
  const [state, setState] = useState(shippingInfo?.state || "");
  const [country, setCountry] = useState(shippingInfo?.country || "");
  const [pinCode, setPinCode] = useState(shippingInfo?.pinCode || "");
  const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo || "");

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length !== 10) {
      toast.error("Phone Number must be exactly 10 digits long");
      return;
    }

    dispatch(
      saveShippingInfo({
        address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
      })
    );

    navigate("/order/confirm");
  };

  return (
    <>
      <ErrorBoundary>
        <CheckoutSteps activeStep={0} />

        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>

            <form onSubmit={shippingSubmit}>
              <div className="flex items-center mb-4">
                <Home className="mr-2" />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center mb-4">
                <LocationCity className="mr-2" />
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center mb-4">
                <PinDrop className="mr-2" />
                <input
                  type="number"
                  placeholder="Pin Code"
                  required
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center mb-4">
                <Phone className="mr-2" />
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  maxLength={10}
                />
              </div>

              <div className="flex items-center mb-4">
                <Public className="mr-2" />
                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              {country && (
                <div className="flex items-center mb-4">
                  <TransferWithinAStation className="mr-2" />
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select State</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className={`w-full p-2 mt-4 bg-blue-500 text-white rounded ${
                  !state ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!state}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Shipping;
