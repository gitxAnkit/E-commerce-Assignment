import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        If you have any questions or inquiries, feel free to reach out!
      </p>
      <div className="space-y-4">
        <a href="mailto:ankitv469@gmail.com" className="inline-block">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Email: ankitv469@gmail.com
          </button>
        </a>
        <a href="tel:+918318785767" className="inline-block">
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Phone: +91 8318785767
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
