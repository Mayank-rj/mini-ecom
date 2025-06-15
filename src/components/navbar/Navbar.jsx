import React, { useState } from "react";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";

import MainMenu from "./MainMenu";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <Topbar />
      <div className="flex justify-between items-center px-4 py-3 shadow-md">
        <Link to="/" className="flex items-center gap-2 text-green-900 text-2xl font-bold">
          <div className="text-3xl"><FaShoppingCart /></div>
          Shopcart
        </Link>

        <MainMenu />

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && <MobileMenu />}
    </>
  );
};

export default Navbar;

// 🛒