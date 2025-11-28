import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";


export default function Navbar() {
const theRef = useRef<HTMLDivElement>(null);

function handleClick() {
  theRef.current?.scrollIntoView({behavior: "smooth"});
};

  return (
    <div className="w-fit ml-auto mr-auto border flex gap-[15px]">
      <NavLink to="/" className="text-red-800">Accueil</NavLink>
      <p className="text-red-800" onClick={handleClick}>GRAPHIQUES</p>
      <Home theRef={theRef}/>
    </div>
  );
}
