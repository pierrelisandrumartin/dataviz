// import des modules et de leur méthodes
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

// fonction d'export des données de l'API
export function StackedAreaChart() {

  interface ShootingData {
    annee_tournage: string;
    type_tournage: string;
    [key: string]: string | number;
  }
  
  // --- gestion de la donnée sortante de l'API
  const { data, isPending, error } = useQuery<{
    results: ShootingData[];
  }>({
    // déclaration obligatoire d'une clé
    queryKey: ["types_and_year"],

    // gestion de la sortie de donnée API
    queryFn: async () => {
      // transformation de l'url en objet URL afin d'appliquer plus faciliment des query params
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set("limit", "100");
      
      // transformation de l'objet URL en string, puis en objet Response ...
      const response = await fetch(url.toString());
      // (si ça fonctionne pas, alors Ereur)
      if (!response.ok) throw new Error("Erreur API");
      // ... puis transformation de l'objet Response en format json puis renvoi à la variable "data" 
      return response.json();
    },
  });
  
  // --- Hook pour génrer la génération de type de tournage et la génération de couleur aléatoire
  const [stateTypes, setStateTypes] = useState<string[]>([]);
  const [stateColor, setStateColor] = useState<string[]>([]);
  
  // --- utilisation du useEffect pour contrôler la génération de couleur aléatoire
  useEffect(() => {
    // création des différents caractères existants dans une coleur au format HexaDécimal
    const charHexaPossibility : string[] = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    const color: string[] = [];
    
    // pour tous les types générés :
    stateTypes.forEach(() => {
      const randomHexaColorStocker: string[] = [];
      // on génère 6 fois un index entre 0 et 15
      while (randomHexaColorStocker.length < 6) {
        // génération aléatoire d'un nombre entre 0 et 16, puis troncature à l'entier
        const randomisedIndex = Math.trunc(Math.random() * 16);
        // rajoute du caractère choisi aléatoirement dans le tableau de la couleur à générer
        randomHexaColorStocker.push(charHexaPossibility[randomisedIndex]);
      }
      // rajoute du "#" + transformation du tableau de caractères en string
      color.push("#" + randomHexaColorStocker.join(""));
    });

    // renvoi de la couleur aléatoire par le Useeffect
    setStateColor(color);
    
    // récupération de chaque type pour le passer en contrôle par un useEffect
  }, [stateTypes]);
  
  // --- utilisation du useEffect pour contrôler les types de tournage générés
  // --- gestion de la donnée sortante de l'API (succès)
  useEffect(() => {
    // si on a un "results" de "data"...
    if (data?.results) {
      // ...on affiche mais tous le types existants dans un tableau "types"
      const types = Array.from(
        new Set(data.results.map((r) => r.type_tournage))
      );
      // on rajoute la catégorie "Autres"
      types.push("Autres");

      // on renvoit les types générés dynamiquement par le UseEffect
      setStateTypes(types);
    }

    // récupération de la donnée API pour le passer en contrôle par un useEffect
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

  // --- tableau vide qui va servir d'afficher les données dans le graph  
  const newDataOrganised: typeTournage[] = [];

  // --- logique permettant de récupérer les données par année  
  for (const shooting of data.results) {
    const anneeFromShooting = shooting.annee_tournage;
    const typeFromShooting = shooting.type_tournage;

    // si dans newDataOrganised, une année correspond à la même que dans les données API on le rajoute dans anneeFound 
    let anneeFound = newDataOrganised.find(
      (r: typeTournage) => r.year === anneeFromShooting
    );

    // si pas de correspondance...
    if (!anneeFound) {

      // ...on rajoute la correspondance dans newDataOrganised...
      anneeFound = { year: anneeFromShooting };

      // ...on met à 0 tous les types du graphique pour que les lignes soient tracées dans le graph au cas où si le type n'existe pas...
      stateTypes.forEach((type) => {
        anneeFound![type] = 0;
      })

      //...rajout des correspondances trouvées dans newDataOrganised.
      newDataOrganised.push(anneeFound);
    }

    // si il y a une correspondance on rajout +1 (ou 0 si annéeFound n'existe pas) à la clé type pour le traçage de la ligne.
    if(anneeFound) {
      anneeFound[typeFromShooting] = (anneeFound[typeFromShooting] || 0) + 1;
    }
  }

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
        {/* utilisé la 1er clé de la donnée généré dans newDataOrganised pour l'axe X (donc year) */}
        <XAxis dataKey={Object.keys(newDataOrganised[0])[0]} />
        <YAxis width="auto" />
        <Tooltip />
        {/* map dynamique en fonction du nombre de type trouvé dans la boucle de création de donnée  */}
        {stateTypes.map((type, index) => (
          <Area
            type="monotone"
            // le type correspondant à l'area
            dataKey={type}
            stackId="1"
            // sortie de la couleur aléatoire
            stroke={stateColor[index]}
            fill={stateColor[index]}
          />
        ))}
      </AreaChart>
      <p></p>
    </>
  );
}

// création du composant yearGraphpage
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
      {/* intégration du chart dans le composantde la page */}
      <p>{StackedAreaChart()}</p>
      <ExitButton />
    </>
  );
}
