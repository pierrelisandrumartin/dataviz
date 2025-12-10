import { NavLink } from "react-router-dom";
// import Home from "../../pages/Home";

export default function Navbar() {
  return (
    <div className="border-2  bg-gray-500 text-gray-800 text-5xl font-serif">
      <NavLink to="/">
        ACCUEIL{" "}
      </NavLink>
    </div>
  );
}
