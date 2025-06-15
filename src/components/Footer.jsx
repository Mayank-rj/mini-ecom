import React from "react";
import { FaBriefcase, FaGift, FaShoppingCart } from "react-icons/fa";
import {
  aboutList,
  departmentList,
  helpList,
  serviceList,
} from "../assets/footerList";
import { Link } from "react-router";
import { MdHelpOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="grid md:grid-cols-6 gap-12 px-[5%] my-5 py-3">
        <div className="col-span-2 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-green-900 text-3xl font-bold">
            <div className="text-4xl">
              <FaShoppingCart />
            </div>
            Shopcart
          </div>
          <p className="my-8 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <h4 className="my-3 font-bold">Accepted Payments</h4>
          <div className="grid grid-cols-4 gap-2">
            <img src="" alt="stripe" />
            <img src="" alt="VISA" />
            <img src="" alt="master" />
            <img src="" alt="amazon" />
            <img src="" alt="Klarna" />
            <img src="" alt="paypal" />
            <img src="" alt="applepay" />
            <img src="" alt="Gpay" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Departments</h4>
          <ul>
            {departmentList.map((name, index) => (
              <li
                key={index}
                className="transform transition-all duration-200 hover:text-amber-600 hover:translate-x-3"
              >
                <Link to="/">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">About Us</h4>
          <ul>
            {aboutList.map((name, index) => (
              <li
                key={index}
                className="transform transition-all duration-200 hover:text-amber-600 hover:translate-x-3"
              >
                <Link to="/">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul>
            {serviceList.map((name, index) => (
              <li
                key={index}
                className="transform transition-all duration-200 hover:text-amber-600 hover:translate-x-3"
              >
                <Link to="/">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Help</h4>
          <ul>
            {helpList.map((name, index) => (
              <li
                key={index}
                className="transform transition-all duration-200 hover:text-amber-600 hover:translate-x-3"
              >
                <Link to="/">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-[5%] py-8">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-fuchsia-500"
          >
            <FaBriefcase />
            Become Seller
          </Link>
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-fuchsia-500"
          >
            <FaGift /> Gift Cards
          </Link>
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-fuchsia-500"
          >
            <MdHelpOutline />
            Help Center
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy and Policy</Link>
          </div>
        </div>
        <div>
          <p className="text-center">
            All Right reserved by Musemind ui/ux design agency | 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
