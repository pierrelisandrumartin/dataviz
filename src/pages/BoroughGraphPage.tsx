import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useQuery } from "@tanstack/react-query";

function VerticalComposedChart() {
  const { data, isPending, error } = useQuery({
    queryKey: ["BoroughGraph"],
    queryFn: async () => {
      const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
      url.searchParams.set("limit", "100");
      const response = await fetch(url.toString());
      const dataResponse = await response.json();
      return dataResponse;
    },
  });

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let allArdtArray: string[] = [];
  const ardtAndValueArray: { ardt: string; value: number }[] = [];
  for (const shooting of data.results) {
    allArdtArray.push(shooting.ardt_lieu);

    const found = ardtAndValueArray.find((r) => r.ardt === shooting.ardt_lieu);

    if (!found) {
      const found: { ardt: string; value: number } = {
        ardt: shooting.ardt_lieu,
        value: 1,
      };
      ardtAndValueArray.push(found);
    } else {
      found!.value++;
    }
  }
  allArdtArray = Array.from(new Set(allArdtArray));

  const allArdtArrayValueSorted: { ardt: string; value: number }[] =
    ardtAndValueArray.sort((a, b) => b.value - a.value);

  console.log(allArdtArrayValueSorted);

  console.log(allArdtArray);

  return (
    <ComposedChart
      layout="vertical"
      style={{
        width: "100%",
        maxWidth: "900px",
        maxHeight: "600px",
        aspectRatio: 1 / 1.618,
      }}
      responsive
      data={ardtAndValueArray}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis
        dataKey="ardt"
        type="category"
        width="auto"
        interval={0}
        minTickGap={20}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" barSize={15} fill="#413ea0" />
      <Bar dataKey="value" barSize={15} fill="#413ea0" />
    </ComposedChart>
  );
}

export default function BoroughGraphPage() {
  return (
    <>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-red-300">
          ----- B o r o u g h G r a p h P a g e -----
        </p>
        Nostrum sit ab iure fuga distinctio eaque mollitia aut voluptatibus
        officia temporibus, saepe quae illum quidem numquam deserunt. Est
        pariatur libero maxime, nisi iusto excepturi officia alias aut magnam
        corrupti laborum illum iste, esse hic reprehenderit, optio eligendi quis
        placeat! Dolor temporibus quos sequi error fugiat facere.
      </p>
      {VerticalComposedChart()}
      <ExitButton />
    </>
  );
}
