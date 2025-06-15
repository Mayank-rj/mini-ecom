import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { searchInput } from "../../store/slice/searchSlice";

const MainMenu = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
    dispatch(searchInput(e.target.value));
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-4 text-black font-medium">
          <div className="cursor-pointer flex items-center">
            Category <TiArrowSortedDown />
          </div>
          <div className="cursor-pointer">Deals</div>
          <div className="cursor-pointer">What's New</div>
          <div className="cursor-pointer">Delivery</div>
        </div>

        <div className="flex items-center border rounded-full px-4 py-2">
          <input
            className="flex-1 outline-none"
            placeholder="Search Product"
            value={search}
            onChange={handleChange}
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="flex items-center gap-6 text-black">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaUser size={20} /> Account
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaShoppingCart size={20} /> Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
