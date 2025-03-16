import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./router/router.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <AppRoutes />
  </Provider>
  // <App />
);
