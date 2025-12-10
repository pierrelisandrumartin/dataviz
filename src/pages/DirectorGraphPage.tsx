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

      if (state !== "Toutes années")
        url.searchParams.set("where", `"${state}"`);

      const response = await fetch(url.toString());
      return await response.json();
    },
  });

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // const directorAndValueData : {director : string, value : number}[] = []

  // for (const value of data.results) {
  //   const found = directorAndValueData.find(r => r.director === value.nom_realisateur)

  //   if(!found) {
  //     const found : {director : string, value : number} = {
  //       director: value.nom_realisateur,
  //       value: 1,
  //     };
  //     directorAndValueData.push(found);
  //   } else
  //     found!.value++;
  // }

  console.log(data);

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-blue-300">
          ----- D i r e c t o r G r a p h P a g e -----
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
