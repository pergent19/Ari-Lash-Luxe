import React from "react";
import logo from "@/assets/images/logo.png";
import Button from './Button/button'

export default function Footer() {
  return (
    <footer className="bg-white-900 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo */}
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-42 h-auto"
          />
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col space-y-3 text-center">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        {/* Column 3: Input and Button */}
        <div className="flex flex-col space-y-3 items-center">
          <p className="text-lg font-semibold">Subscribe to our Newsletter</p>
          <div className="flex w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-1 border-black p-3 text-black focus:outline-none"
            />
            <Button
            text="Subscribe"
            href="#"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}