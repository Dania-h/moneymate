import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import logo from "./assets/mm_logo.png";
import Find from "./Find.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/find",
    element: <Find />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
        <img src={logo} alt="moneymate logo" />
    </header>
    <RouterProvider router={router} />
  </StrictMode>
);
