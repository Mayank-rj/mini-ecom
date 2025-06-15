import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/getCategories";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/slice/categorySlice";

const CategoryButton = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");

  const getCategory = async () => {
    try {
      const response = await getCategories();
      // console.log(response);
      if (response?.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeoutlId = setTimeout(() => {
      getCategory();
    }, 500);

    return () => clearTimeout(timeoutlId);
  }, []);

  const handleClick = (e) => {
    setActive(e.target.textContent);
    dispatch(setCategory(e.target.textContent))
  };

  return (
    <div className="flex gap-4 my-6 mx-6">
      <button
        className={`${
          active === "All" ? "bg-green-900 text-white" : "bg-white text-black"
        } border border-green-900 rounded-full py-1 px-3 w-32 text-center pointer:cursor`}
        onClick={handleClick}
      >
        All
      </button>
      {categories?.map((cat, i) => (
        <button
          className={`${
            active === cat ? "bg-green-900 text-white" : "bg-white text-black"
          } border border-green-900 rounded-full py-1 px-3 w-32 truncate text-center pointer`}
          key={i}
          onClick={handleClick}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
