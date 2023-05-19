import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import InitalLoder from "./component/InitalLoader.jsx";

const routes = App();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} fallbackElement={<InitalLoder />} />
  </React.StrictMode>
);
