import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ShopPage from "./Components/ShopPage/ShopPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
