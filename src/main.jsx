import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Product from "./page/product/Product.jsx";
import AboutUS from "./page/about-us/AboutUS.jsx";
import Services from "./page/services/Services.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about-us",
        element: <AboutUS />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
