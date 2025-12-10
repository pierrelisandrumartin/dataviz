import { NavLink } from "react-router-dom";

export default function YearIcon() {
  return (
    <NavLink to="/YearGraphPage">
      <div className="w-[400px] h-[200px] bg-yellow-300 flex flex-col justify-center items-center  bg-[url(src/assets/years.jpg)] bg-cover">
        {" "}
      </div>
      <p className="flex flex-col justify-center items-center text-2xl text-white bg-gray-600 ">
        Year Graph
      </p>
    </NavLink>
  );
}
