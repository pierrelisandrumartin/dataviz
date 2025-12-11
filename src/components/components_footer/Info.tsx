export default function Info() {

    return (
        <div id="info_container" className="mx-auto mt-[20px] p-[5px] max-w-fit h-[100px] flex ">
            <div className="flex-1 flex-col text-center ">
                <h3 className="mb-[3px] mx-[5px] font-bold bg-gray-200 ">Projet dataviz</h3>
                <p className="leading-[30px] text-[14px] text-white">Une modélisation simple des données sur l'activité cinématographique parisienne 🎥</p>
            </div>
            <div className="flex-1 flex-col text-center ">
                <h3 className="mb-[3px] mx-[5px] font-bold bg-gray-200 ">Ressources</h3>
                <div id="ressources_container" className="grid grid-cols-2 gap-x-4 text-[14px]">
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/api/?disjunctive.type_tournage&disjunctive.nom_tournage&disjunctive.nom_realisateur&disjunctive.nom_producteur&disjunctive.ardt_lieu" target="_blank">site de l'API 👈</a>
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://dataviz-v2-ts.vercel.app/" target="_blank">inspiration 👈</a>
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://docs.google.com/presentation/d/1D5GxiUMO7HEx8IiVpkIbeAV8gCqWC8T6sQ8Q2UZcpdw/edit?slide=id.p#slide=id.p" target="_blank">React-Router👈</a>
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank">Tanstack-Query👈</a>
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://recharts.github.io/en-US/" target="_blank">Recharts👈</a>
                    <a className="text-blue-500 cursor-pointer hover:font-bold " href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">Tailwind CSS👈</a>
                </div>
            </div>
            <div className="flex-1 flex-col text-center">
                <h3 className="mb-[3px] mx-[5px] font-bold bg-gray-200">Auteurs</h3>
                <div id="auteurs_container" className="grid grid-cols-2 gap-x-4 text-[14px]">
                    <a className="hover:font-bold text-white" href="https://github.com/pierrelisandrumartin/dataviz" target="_blank">Github Repo dataviz</a>
                    <a className="hover:font-bold text-white" href="https://github.com/pierrelisandrumartin" target="_blank">Github Pierre</a>
                    <a className="hover:font-bold text-white" href="https://github.com/Ixibus" target="_blank">Github Franck</a>
                    <a className="hover:font-bold text-white" href="https://www.linkedin.com/in/pierre-lisandru-martin-4b178a291/" target="_blank">Linkedin Pierre</a>
                    <a className="hover:font-bold text-white" href="https://www.linkedin.com/in/franck-corcher-61b36440/" target="_blank">Linkedin Franck</a>
                </div>
            </div>
        </div>
    )
}