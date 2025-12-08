import { NavLink } from "react-router-dom";


export default function ShootingIcon() {
  return (
    <NavLink to="/ShootingGraphPage">
      <div
        className="w-[400px] h-[200px] bg-green-300 flex flex-col justify-center items-center">
        <p>Shooting Graph</p>
      </div>
    </NavLink>
  );
}
