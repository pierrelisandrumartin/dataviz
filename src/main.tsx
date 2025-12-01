import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ShootingGraphPage from "./pages/ShootingGraphPage";
import YearGraphPage from "./pages/YearGraphPage";
import TypeGraphPage from "./pages/TypeGraphPage";
import DirectorGraphPage from "./pages/DirectorGraphPage";
import BoroughGraphPage from "./pages/BoroughGraphPage";
import ExitButton from "./components/components_exitGraphPage/ExitButton";

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
  {
    path: "/",
    element: <ExitButton/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
