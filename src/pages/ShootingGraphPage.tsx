import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import Firstgraph from "../components/components_graph/Firstgraph";

export default function ShootingGraphPage() {
  return (
    <>
      <Navbar />
      <div className=" bg-white">
        <p className="border flex justify-center text-gray-600">
          ----- S h o o t i n g G r a p h P a g e -----
        </p>
        <p className=" text-center text-gray-800">
          Le graphique présente l’évolution du nombre de tournages à Paris entre
          2016 et 2024, avec des variations marquées d’une année à l’autre.
          L’année 2016 affiche un pic à 19 tournages, suivie d’une forte baisse
          en 2017 à seulement 9. On observe ensuite une remontée en 2018 avec 14
          tournages, avant un léger recul à 12 en 2019. La période 2020-2023
          reste globalement stable autour de 9 à 12 tournages, traduisant une
          activité fluctuante mais contenue. En 2024, le nombre chute à 6
          tournages, marquant le niveau le plus bas de la période observée.
        </p>
        <Firstgraph />
        <ExitButton />
      </div>
    </>
  );
}
// Évolution du nombre de tournages par année
// Graphique en ligne (LineChart)

// Axe X = année, axe Y = nombre de tournages

// Objectif : observer les tendances (pics, baisses, périodes creuses)
