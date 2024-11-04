import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h5 className="font-bold text-white mb-2">Get to Know Us</h5>
            <ul>
              <li className="mb-1 hover:underline cursor-pointer">About Us</li>
              <li className="mb-1 hover:underline cursor-pointer">Careers</li>
            </ul>
          </div>
          {/* Section 2 */}
          <div>
            <h5 className="font-bold text-white mb-2">Connect with Us</h5>
            <ul>
              <li className="mb-1 hover:underline cursor-pointer">Facebook</li>
              <li className="mb-1 hover:underline cursor-pointer">Twitter</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h5 className="font-bold text-white mb-2">Let Us Help You</h5>
            <ul>
              <li className="mb-1 hover:underline cursor-pointer">
                Your Account
              </li>
              <li className="mb-1 hover:underline cursor-pointer">
                Returns Centre
              </li>
              <li className="mb-1 hover:underline cursor-pointer">
                100% Purchase Protection
              </li>
              <li className="mb-1 hover:underline cursor-pointer">Help</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
