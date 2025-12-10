import { NavLink } from "react-router-dom";

export default function ShootingIcon() {
  return (
    <NavLink to="/ShootingGraphPage">
      <div className="w-[400px] h-[200px] flex flex-col justify-center items-center text-3xl bg-[url(src/assets/shooting.jpg)] bg-cover"> </div>
        <p className="flex flex-col justify-center items-center text-2xl text-white bg-gray-500">
          Shooting Graph
        </p>
    </NavLink>
  );
}
