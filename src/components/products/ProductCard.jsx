import { Link } from "react-router";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <img
          className="h-60 w-full object-contain p-5"
          src={product.image}
          alt={product.title}
        />
      </Link>

      <div className="px-5 pb-5">
        <Link to={`/product/${product.id}`}>
          <h5 className="text-md font-semibold tracking-tight text-gray-900 mb-2 truncate">
            {product.title}
          </h5>
        </Link>

        <p className="text-gray-500 text-sm mb-3">{product.category}</p>

        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`h-5 w-5 ${
                index < Math.round(product.rating.rate)
                  ? "text-green-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
