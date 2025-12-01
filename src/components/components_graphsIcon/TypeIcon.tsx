import { NavLink } from "react-router-dom";

export default function TypeIcon() {
  return (
    <NavLink to="/TypeGraphPage">
      <div className="w-[400px] h-[200px] bg-purple-300 flex flex-col justify-center items-center">
        <p>Type Graph</p>
      </div>
    </NavLink>
  );
}
