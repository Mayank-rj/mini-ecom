import axios from "axios"

export const getCategories = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    // console.log(response)
    return response;
}