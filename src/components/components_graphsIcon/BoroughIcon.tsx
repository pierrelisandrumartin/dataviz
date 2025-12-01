import { NavLink } from "react-router-dom";

export default function BoroughIcon() {

  return (
    <NavLink to="/BoroughGraphPage">
      <div className="w-[400px] h-[200px] bg-red-300 flex flex-col justify-center items-center">
        <p>Borough Graph</p>
      </div>
    </NavLink>

  );
}
