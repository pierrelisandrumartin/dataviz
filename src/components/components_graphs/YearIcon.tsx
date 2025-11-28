import { NavLink } from "react-router-dom";

export default function YearIcon() {
  return (
    <NavLink to="/YearGraphPage">
      <div className="w-[400px] h-[200px] bg-yellow-300 flex flex-col justify-center items-center">
        <p>Year Graph</p>
      </div>
    </NavLink>
  );
}
