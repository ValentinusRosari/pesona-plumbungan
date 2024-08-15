import React from "react";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-50 text-white fixed w-full z-20 top-0 shadow flex justify-between items-center px-4 md:px-8">
      <a href="/" className="flex items-center m-4">
        <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
      </a>
      <div className="hidden md:flex w-full justify-end">
        <nav className="flex space-x-4 md:space-x-8">
          <a href="#tentang" className="hover:text-gray-400">
            Tentang
          </a>
          <a href="#wisata" className="hover:text-gray-400">
            Wisata
          </a>
          <a href="#budaya" className="hover:text-gray-400">
            Budaya
          </a>
          <a href="#komoditas" className="hover:text-gray-400">
            Komoditas
          </a>
        </nav>
      </div>
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </header>
  );
};

export default Header;
