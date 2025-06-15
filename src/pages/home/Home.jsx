import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import Products from "../../components/products/Products";
import CategoryButton from "../../components/categoryButtons/CategoryButton";
import { useSelector } from "react-redux";

const Home = () => {
  const activeCategory = useSelector((state) => state.category.value);
  const searchInput = useSelector((state) => state.search.value);

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      // console.log(response);
      if (response.status === 200) {
        setAllProducts(response.data);
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutlId = setTimeout(() => {
      getProducts();
    }, 500);

    return () => clearTimeout(timeoutlId);
  }, []);

  useEffect(() => {
    let filterProducts = [...allProducts];
    if (activeCategory !== "All") {
      filterProducts = filterProducts.filter(
        (item) => item.category === activeCategory
      );
    }
    if (searchInput !== "") {
      filterProducts = filterProducts.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setProducts(filterProducts);
  }, [activeCategory, allProducts, searchInput]);

  return (
    <>
      <CategoryButton />
      <Products products={products} loading={loading} />
    </>
  );
};

export default Home;
