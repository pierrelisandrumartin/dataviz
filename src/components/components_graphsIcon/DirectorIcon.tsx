import { NavLink } from "react-router-dom";

export default function DirectorIcon() {
  return (
    <NavLink to="/DirectorGraphPage">
      <div className="w-[400px] h-[200px] bg-blue-300 flex flex-col justify-center items-center">
        <p>Director Graph</p>
      </div>
    </NavLink>
  );
}
