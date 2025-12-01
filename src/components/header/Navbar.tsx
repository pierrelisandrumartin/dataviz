import { NavLink } from "react-router-dom";
// import Home from "../../pages/Home";


export default function Navbar() {

  return (
    <div className="w-fit ml-auto mr-auto border flex gap-[15px]">
      <NavLink to="/" className="text-red-800">ACCUEIL</NavLink>
      <p className="text-red-800">GRAPHIQUES</p>
      <p className="text-red-800">A PROPOS</p>
    </div>
  );
}
