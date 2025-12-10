import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function SimpleBarChart() {
  const [state, setState] = useState("Toutes années");

  const { data, isPending, error } = useQuery({
    queryKey: ["SimpleBarChart", state],
    queryFn: async () => {
      const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
      url.searchParams.set("limit", "11");
      url.searchParams.set("select", "nom_realisateur, count(*) as total");
      url.searchParams.set("group_by", "nom_realisateur");
      url.searchParams.set("order_by", "total DESC");
      url.searchParams.set("where", "nom_realisateur IS NOT NULL AND nom_realisateur != ''");

      if (state !== "Toutes années")
        url.searchParams.set("where", `"${state}"`);
      else
        url.searchParams.set("where", "nom_realisateur IS NOT NULL AND nom_realisateur != ''");

      const response = await fetch(url.toString());
      return await response.json();
    },
  });

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.results)

  return (
    <>
      <select name="year_filter" id="year_filter" onChange={(e) => setState(e.target.value)}>
      <option value="Toutes années">Toutes années</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "1200px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data.results}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 80,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="nom_realisateur"
          interval={0}
          angle={50}
          mirror={false}
          tickMargin={40}
          dx={10}
          dy={5}
        />
        <YAxis dataKey="total" width="auto" />
        <Tooltip />
        <Bar
          dataKey="total"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        >
          <LabelList position="top" />
        </Bar>
      </BarChart>
    </>
  );
}

export default function DirectorGraphPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-center justify-item-center">
        <p className="border flex justify-center">
          ----- D i r e c t o r G r a p h P a g e -----
        </p>
        <p>
        Le graphique montre que Darren Star est en tête avec 149 tournages, nettement au-dessus des autres réalisateurs. <br />
Il est suivi par Aditya Chopra (129) et Sylvie Verheyde (109), qui forment le peloton de tête. <br />
Fred Garson (99) et Zabou Breitman (90) occupent des positions intermédiaires avec des volumes importants. <br />
On observe ensuite une baisse progressive avec Igor Gotesman (71), Jeanne Herry (69) et Noémie Lvovsky (62). <br />
Les plus faibles nombres reviennent à Hervé Hadmar (59) et Steven Conrad (58), fermant le classement.
      </p>
      {SimpleBarChart()}
      <ExitButton />
      </div>
    </>
  );
}
