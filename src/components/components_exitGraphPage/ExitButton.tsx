import { NavLink } from "react-router-dom"

export default function ExitButton() {
    return (
        <NavLink to="/">
        <div className="ml-auto flex flex-col justify-center items-center w-[150px] h-[50px] bg-slate-500 text-white">Revenir à L'acceuil</div>
        </NavLink>
    )
}
