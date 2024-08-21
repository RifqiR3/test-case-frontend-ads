"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center bg-gray-50 mt-6">
      <nav className="bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <div className="flex-1 text-left">
            <Link href="/" className="font-bold text-xl">
              <Image
                src="/images/forwardin_logo.png"
                alt="FORWARDIN"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Demo
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link
              href="/"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Demo
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <div className="text-center">
              <Link
                href="/"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
