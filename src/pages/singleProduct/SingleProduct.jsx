import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../api/getSingleProduct";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      if (id) {
        const response = await getSingleProduct(id);
        console.log(response);
        if (response.status === 200) {
          setProductDetails(response.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getProduct();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleQuantity = (e) => {
    const value = e.target.textContent;

    if (quantity > 1 && value === "-") {
      setQuantity((prev) => prev - 1);
    }
    if (value === "+") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="px-6 h-[75vh]">
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className="w-full h-full object-contain p-5"
        />
      </div>
      <div className="p-6">
        <h1 className=" lg:text-4xl md:text-3xl sm:text-2xl font-extrabold my-2">
          {productDetails.title}
        </h1>
        <h3 className="md:text-xl text-lg text-slate-500 my-2">{productDetails.category}</h3>
        <p className="text-sm text-slate-700 my-2">{productDetails.description}</p>
        <div className="flex items-center my-3">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`h-5 w-5 ${
                index < Math.round(productDetails?.rating?.rate)
                  ? "text-green-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            ({productDetails?.rating?.count})
          </span>
        </div>
        <h2 className="font-bold text-3xl my-5">$ {productDetails.price}</h2>
        <p className="text-sm md:text-xl">Quantity</p>
        <div className="rounded-2xl w-36 flex justify-between text-2xl md:text-4xl my-3 overflow-hidden">
          <button className="bg-slate-300 px-3 cursor-pointer" onClick={handleQuantity}>-</button>
          {quantity}
          <button className="bg-slate-300 px-3 cursor-pointer" onClick={handleQuantity}>+</button>
        </div>
        <div className="flex gap-4 my-7 text-base md:text-2xl">
          <button className="border rounded-full px-3 py-1 bg-green-900 text-white">Buy Now</button>
          <button className="border border-green-900 rounded-full px-3 py-1">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
