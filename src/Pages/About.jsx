import React from "react";
import { Button, Typography, Avatar } from "@mui/material";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        About Our E-Commerce
      </h1>

      <div className="flex flex-col items-center text-center">
        <Avatar
          sx={{ width: 120, height: 120, mb: 4 }}
          src="https://res.cloudinary.com/dlbcv2oft/image/upload/v1729023353/ankit__xjwniz.jpg" // Placeholder for your logo or image
          alt="Zenith-Mart Logo"
        />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          E-Commerce
        </h2>
        <Button
          onClick={visitInstagram}
          variant="contained"
          color="primary"
          sx={{ mb: 4 }}
        >
          Visit Instagram
        </Button>
        <p className="text-gray-600 mt-4 max-w-lg">
          Welcome to Zenith-Mart, your one-stop destination for a comprehensive
          and seamless online shopping experience! Our goal is to provide you
          with the best selection of products, competitive pricing, and
          unmatched customer service.
        </p>
      </div>

      <div className="flex space-x-6 mt-8">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <FaTwitter sx={{ fontSize: 40 }} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500 hover:text-pink-700 transition"
        >
          <FaInstagram sx={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
};

export default About;
