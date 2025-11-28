import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-fit ml-auto mr-auto border flex gap-[15px]">
      <NavLink to="/" className="text-red-800">Accueil</NavLink>
      <NavLink to="/Testpage" className="text-red-800">GRAPHIQUES</NavLink>
      <button>A PROPOS</button>
    </div>
  );
}
