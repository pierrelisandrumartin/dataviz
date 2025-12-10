import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

function VerticalComposedChart() {
  const { data, isPending, error } = useQuery({
    queryKey: ["BoroughGraph"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
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
    </ComposedChart>
  );
}

export default function BoroughGraphPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-center justify-item-center">
        <p className="border flex justify-center ">
          ----- B o r o u g h G r a p h P a g e -----
        </p>
        <p>
          Le 75009 arrive largement en tête avec 12 tournages, ce qui en fait la
          zone la plus sollicitée. <br />
          Les 75013 et 75001 suivent avec 8 tournages chacun, montrant un niveau
          d’activité élevé. <br />
          Le 75012 (7 tournages) ainsi que les arrondissements entre 5 et 6
          tournages forment un groupe intermédiaire. <br />
          De nombreux arrondissements comme les 75018, 75002 ou 75020 affichent
          une activité plus modérée, entre 3 et 4 tournages. <br />
          Enfin, les zones les moins utilisées sont les 75006 et 92170, avec 1
          seul tournage chacune.
        </p>
        {VerticalComposedChart()}
        <ExitButton />
      </div>
    </>
  );
}
