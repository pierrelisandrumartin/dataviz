import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function TotalCount() {}

// #endregion

export default function Firstgraph() {
  const { data, isPending, error } = useQuery({
    queryKey: ["totalCount2016"],
    queryFn: async () => {
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      //   url.searchParams.set("where", "annee_tournage = date'2016'");
      url.searchParams.set("select", "annee_tournage");
      url.searchParams.set("limit", "100");
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erreur API");
      return response.json();
    },
  });

  if (isPending) return <p>Chargement…</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const countByResponse: any = {};
  const resultArray: any = [];

  for (const results of data.results) {
    const annee_tournage = results.annee_tournage;
    if (countByResponse[annee_tournage] === undefined) {
      countByResponse[annee_tournage] = 1;
    } else {
      countByResponse[annee_tournage] = countByResponse[annee_tournage] + 1;
    }
  }

  for (const response in countByResponse) {
    resultArray.push({
      response: response,
      count: countByResponse[response],
    });
  }

  console.log(resultArray);
  //   const data = [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];

  return (
    <LineChart
      style={{
        width: "100%",
        maxWidth: "700px",
        height: "100%",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={resultArray}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="response" />
      <YAxis width="auto" dataKey="count" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
