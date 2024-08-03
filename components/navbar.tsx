"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-sm h-10 w-full flex items-center justify-between px-6 sticky top-0 bg-transparent backdrop-blur-md">
      <div className="flex items-center z-10">
        <Link href={"/"}>
        <img
          className="h-6 w-6 md:h-8 md:w-8"
          src="/logo.png" // replace with your logo path
          alt="Logo"
        />
        </Link>
      </div>
      <div className="flex md:hidden z-10">
        <button onClick={toggleMenu} className="text-black dark:text-gray-300">
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>
      <div className={`fixed inset-0 top-40 md:top-0 bg-transparent backdrop-blur-md  transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none top-10'} md:relative md:bg-transparent md:opacity-100 md:pointer-events-auto`}>
        <div className="flex flex-col h-full justify-center items-center md:flex-row md:justify-center">
          <ul className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <li><a href="/research" className="text-white text-2xl md:text-sm md:text-black dark:text-gray-300 hover:text-gray-400 md:hover:text-gray-800 dark:hover:text-gray-200">Research</a></li>
            <li><a href="/products" className="text-white text-2xl md:text-sm md:text-black dark:text-gray-300 hover:text-gray-400 md:hover:text-gray-800 dark:hover:text-gray-200">Products</a></li>
            <li><a href="/safety" className="text-white text-2xl md:text-sm md:text-black dark:text-gray-300 hover:text-gray-400 md:hover:text-gray-800 dark:hover:text-gray-200">Safety</a></li>
            <li><a href="/company" className="text-white text-2xl md:text-sm md:text-black dark:text-gray-300 hover:text-gray-400 md:hover:text-gray-800 dark:hover:text-gray-200">Company</a></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center z-10">
        <FiSearch className="text-black dark:text-gray-300 dark:hover:text-gray-400 hover:text-black h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 transform hover:rotate-90" />
      </div>
    </nav>
  );
};

export default Navbar;