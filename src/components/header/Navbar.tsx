import { NavLink } from "react-router-dom";
// import Home from "../../pages/Home";


export default function Navbar() {

  return (
    <div className="w-fit ml-auto mr-auto border flex gap-[15px]">
      <NavLink to="/" className="text-red-800">Accueil</NavLink>
      <p className="text-red-800">GRAPHIQUES</p>
    </div>
  );
}
