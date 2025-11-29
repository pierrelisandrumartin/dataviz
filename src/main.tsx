import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShootingGraphPage from "./pages/ShootingGraphPage";
import YearGraphPage from "./pages/YearGraphPage";
import TypeGraphPage from "./pages/TypeGraphPage";
import DirectorGraphPage from "./pages/DirectorGraphPage";
import BoroughGraphPage from "./pages/BoroughGraphPage";
import Home from "./pages/Home";

// import Test from "./pages/Test"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/ShootingGraphPage",
    element: <ShootingGraphPage />,
  },
  {
    path: "/YearGraphPage",
    element: <YearGraphPage />,
  },
  {
    path: "/TypeGraphPage",
    element: <TypeGraphPage />,
  },
  {
    path: "/DirectorGraphPage",
    element: <DirectorGraphPage />,
  },
  {
    path: "/BoroughGraphPage",
    element: <BoroughGraphPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
