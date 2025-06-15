import axios from "axios"

export const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response)
    return response;
}