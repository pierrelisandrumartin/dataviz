import { NavLink } from "react-router-dom";

export default function DirectorIcon() {
  return (
    <NavLink to="/DirectorGraphPage">
      <div className="w-[400px] h-[200px] bg-blue-300 flex flex-col justify-center items-center bg-[url(src/assets/director.jpg)] bg-cover">
        {" "}
      </div>
      <p className="flex flex-col justify-center items-center text-2xl text-white bg-gray-800">
        Director Graph
      </p>
    </NavLink>
  );
}
