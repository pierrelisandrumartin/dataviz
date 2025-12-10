import { NavLink } from "react-router-dom";

export default function BoroughIcon() {

  return (
    <NavLink to="/BoroughGraphPage">
      <div className="w-[400px] h-[200px] bg-red-300 flex flex-col justify-center items-center bg-[url(src/assets/borough.jpg)] bg-cover"> </div>
        <p className="flex flex-col justify-center items-center text-2xl text-white bg-gray-900">Borough Graph</p>
      
    </NavLink>

  );
}
