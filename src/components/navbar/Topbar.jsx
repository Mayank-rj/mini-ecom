import React from "react";
import { FaPhone } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const TopBar = () => {
  return (
    <div className="bg-green-900 text-white flex justify-between items-center px-4 py-2 text-sm">
      <div className="flex items-center gap-2">
        <FaPhone /> +001234567890
      </div>
      <div className="hidden md:flex items-center gap-6">
        <span>Get 50% Off on Selected Items</span>
        <span className="border-l h-4 border-white"></span>
        <span>Shop Now</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">Eng <TiArrowSortedDown /></div>
        <div className="flex items-center gap-1">Location <TiArrowSortedDown /></div>
      </div>
    </div>
  );
};

export default TopBar;
