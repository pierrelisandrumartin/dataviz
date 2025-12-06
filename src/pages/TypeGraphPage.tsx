import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SimpleBarChart() {
  const { data, isPending, error } = useQuery({
    queryKey: ["type_tournage"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set("limit", "100");

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Error API");

      return response.json();
    },
  });


  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const newDataOrganised: { type: string; value: number }[] = [];
  for (const tournage of data.results) {
    const typeAndValueFound = newDataOrganised.find(
      (typeAndValue) => typeAndValue.type === tournage.type_tournage
    );

    if (!typeAndValueFound) {
      newDataOrganised.push({
        type: tournage.type_tournage,
        value: 1,
      });
    };

    if(typeAndValueFound) {
      typeAndValueFound!.value = (typeAndValueFound!.value || 0) + 1;
    }

  }

  const hexCharPossibility : string[] = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"] ;
  const randomColorArray : string[] = [];

  while (randomColorArray.length < 6) {
    const randomHexCharIndex = Math.trunc(Math.random() * 16);
    randomColorArray.push(hexCharPossibility[randomHexCharIndex])
  }

  const randomColor : string = "#" + randomColorArray.join("");


  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={newDataOrganised}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" />
      <YAxis dataKey="value" width="auto" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="value"
        fill={randomColor}
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
    </BarChart>
  );
}

export default function TypeGraphPage() {
  return (
    <>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-purple-300">
          ----- T y p e G r a p h P a g e -----
        </p>
        Nostrum sit ab iure fuga distinctio eaque mollitia aut voluptatibus
        officia temporibus, saepe quae illum quidem numquam deserunt. Est
        pariatur libero maxime, nisi iusto excepturi officia alias aut magnam
        corrupti laborum illum iste, esse hic reprehenderit, optio eligendi quis
        placeat! Dolor temporibus quos sequi error fugiat facere.
      </p>
      {SimpleBarChart()}
      <ExitButton />
    </>
  );
}
