import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const MobileMenu = () => {
  return (
    <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-4">
      <div className="flex items-center">
        Category <TiArrowSortedDown />
      </div>
      <div>Deals</div>
      <div>What's New</div>
      <div>Delivery</div>
      <div className="flex items-center border rounded-full px-4 py-2">
        <input className="flex-1 outline-none" placeholder="Search Product" />
        <FaSearch className="text-gray-500" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FaUser /> Account
        </div>
        <div className="flex items-center gap-1">
          <FaShoppingCart /> Cart
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
