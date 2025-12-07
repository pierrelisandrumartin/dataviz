// import type { JSX, JSXElementConstructor } from "react";
import { useState, useEffect } from "react";
import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import { useQuery } from "@tanstack/react-query";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export function StackedAreaChart() {

  // --- typage de la donnée sortante de l'API
  interface ShootingData {
    annee_tournage: string;
    type_tournage: string;
    [key: string]: string | number;
  }
  
  // --- gestion de la donnée sortante de l'API
  const { data, isPending, error } = useQuery<{
    results: ShootingData[];
  }>({
    queryKey: ["types_and_year"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set("limit", "100");
      
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erreur API");
      return response.json();
    },
  });
  
  // --- Hook pour génrer la génération de type de tournage et la génération de couleur aléatoire
  const [stateTypes, setStateTypes] = useState<string[]>([]);
  const [stateColor, setStateColor] = useState<string[]>([]);
  
  // --- utilisation du useEffect pour contrôler la génération de couleur aléatoire
  useEffect(() => {
    const charHexaPossibility : string[] = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    const color: string[] = [];
    
    stateTypes.forEach(() => {
      const randomHexaColorStocker: string[] = [];
      while (randomHexaColorStocker.length < 6) {
        const randomisedIndex = Math.trunc(Math.random() * 16);
        randomHexaColorStocker.push(charHexaPossibility[randomisedIndex]);
      }
      color.push("#" + randomHexaColorStocker.join(""));
    });
    
    setStateColor(color);
  }, [stateTypes]);
  
  // --- utilisation du useEffect pour contrôler les types de tournage générés
  // --- gestion de la donnée sortante de l'API (succès)
  useEffect(() => {
    if (data?.results) {
      const types = Array.from(
        new Set(data.results.map((r) => r.type_tournage))
      );
      types.push("Autres");
      setStateTypes(types);
    }
  }, [data]);
  
  // --- gestion de la donnée sortante de l'API (chargement)
  if (isPending) return <p>Chargement…</p>;
  
  // --- gestion de la donnée sortante de l'API (échec)
  if (error) return <p>Erreur : {error.message}</p>;
 
  
  // --- une fois les données envoyées, création du nombre de tournage par types de tournage pour chaque année

  interface typeTournage {
    year: string,
    [key: string]: any | string,
  }
  
  const newDataOrganised: typeTournage[] = [];
  
  for (const shooting of data.results) {
    const anneeFromShooting = shooting.annee_tournage;
    const typeFromShooting = shooting.type_tournage;

    let anneeFound = newDataOrganised.find(
      (r: typeTournage) => r.year === anneeFromShooting
    );

    if (!anneeFound) {
      anneeFound = { year: anneeFromShooting };

      stateTypes.forEach((type) => {
        anneeFound![type] = 0;
      })

      newDataOrganised.push(anneeFound);
    }

    if(anneeFound) {
      anneeFound[typeFromShooting] = (anneeFound[typeFromShooting] || 0) + 1;
    }

  }

  console.log("Résultats par année", newDataOrganised);
  console.log("la clé", typeof Object.keys(newDataOrganised[0])[0]);

 return (
    <>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={newDataOrganised}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={Object.keys(newDataOrganised[0])[0]} />
        <YAxis width="auto" />
        <Tooltip />
        {stateTypes.map((type, index) => (
          <Area
            type="monotone"
            dataKey={type}
            stackId="1"
            stroke={stateColor[index]}
            fill={stateColor[index]}
          />
        ))}
      </AreaChart>
      <p></p>
    </>
  );
}

export default function YearGraphPage() {
  return (
    <>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-yellow-300">
          ----- Y e a r G r a p h P a g e -----
        </p>
        Nostrum sit ab iure fuga distinctio eaque mollitia aut voluptatibus
        officia temporibus, saepe quae illum quidem numquam deserunt. Est
        pariatur libero maxime, nisi iusto excepturi officia alias aut magnam
        corrupti laborum illum iste, esse hic reprehenderit, optio eligendi quis
        placeat! Dolor temporibus quos sequi error fugiat facere.
      </p>
      <p>{StackedAreaChart()}</p>
      {/* {TotalCount()} */}
      <ExitButton />
    </>
  );
}
