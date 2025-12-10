import { NavLink } from "react-router-dom";

export default function TypeIcon() {
  return (
    <NavLink to="/TypeGraphPage">
      <div className="w-[400px] h-[200px] bg-purple-300 flex flex-col justify-center items-center bg-[url(src/assets/type.jpg)] bg-cover"> </div>
        <p className="flex flex-col justify-center items-center text-2xl text-white bg-gray-700">Type Graph</p>
      
    </NavLink>
  );
}
