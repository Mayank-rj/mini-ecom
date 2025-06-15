import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/singleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
