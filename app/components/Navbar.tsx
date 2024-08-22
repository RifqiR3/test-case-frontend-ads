"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownFeaturesOpen, setDropdownFeaturesOpen] =
    useState<boolean>(false);
  const [dropdownSignInOpen, setDropdownSignInOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex justify-center items-center bg-gray-50 md:mt-6">
        <nav className="bg-white shadow-lg w-full md:w-auto md:rounded-lg">
          <div className="flex items-center justify-between px-10 py-5 md:px-10 md:py-4 space-x-8">
            <div className="flex-1 text-left">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 text-left">
                <Image
                  src="/images/forwardin_logo.png"
                  alt="FORWARDIN"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 relative">
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownFeaturesOpen(!dropdownFeaturesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  Features
                  {dropdownFeaturesOpen ? (
                    <ChevronUpIcon className="h-5 w-5 ml-2" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 ml-2" />
                  )}
                </button>
                {dropdownFeaturesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 1
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 2
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 3
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Pricing
              </Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Demo
              </Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>

              {/* Sign In */}
              <div className="flex-1 text-right">
                <Link
                  href="/"
                  className="bg-blue-600 text-white py-3 px-10 rounded-lg hover:bg-blue-800"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Icon For Smaller Screen */}
            <div className="block md:hidden relative z-20">
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
          </div>

          {/* Mobile Menu */}
          <div
            className={`relative top-full left-0 w-full bg-white shadow-lg ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="md:hidden px-4 py-2 space-y-2 text-center">
              {/* Mobile Features Dropdown */}
              <div>
                <button
                  onClick={() => setDropdownFeaturesOpen(!dropdownFeaturesOpen)}
                  className="flex font-bold items-center justify-center w-full text-gray-700 py-2 px-4 bg-white hover:bg-gray-100"
                >
                  Features
                  {dropdownFeaturesOpen ? (
                    <ChevronUpIcon className="h-5 w-5 ml-2" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 ml-2" />
                  )}
                </button>
                {dropdownFeaturesOpen && (
                  <div className="bg-white shadow-lg rounded-lg">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 1
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 2
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Feature 3
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="block text-gray-700 py-3 px-4 hover:bg-gray-100"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="block text-gray-700 py-3 px-4 hover:bg-gray-100"
              >
                Demo
              </Link>
              <Link
                href="/"
                className="block text-gray-700 py-3 px-4 hover:bg-gray-100"
              >
                Blog
              </Link>
              <div className="p-3 ">
                {/* Mobile Sign In Dropdown */}
                <button
                  onClick={() => setDropdownSignInOpen(!dropdownSignInOpen)}
                  className="flex items-center justify-center w-full text-white py-2 px-4 bg-blue-600 rounded-lg"
                >
                  Sign In
                  {dropdownSignInOpen ? (
                    <ChevronUpIcon className="h-5 w-5 ml-2" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 ml-2" />
                  )}
                </button>
                {dropdownSignInOpen && (
                  <div className="bg-white mt-2">
                    {" "}
                    {/* Added mt-2 for spacing */}
                    <Link
                      href="/"
                      className="block p-5 text-gray-700 hover:bg-gray-100"
                    >
                      Sign in as Admin
                    </Link>
                    <Link
                      href="/"
                      className="block p-5 text-gray-700 hover:bg-gray-100"
                    >
                      Sign in as Customer Service
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
