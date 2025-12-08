import { useQuery } from "@tanstack/react-query";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";



const year = {
    "total_count": 14760,
    "results": [
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2024"
        },
        {
            "annee_tournage": "2024"
        },
        {
            "annee_tournage": "2024"
        },
        {
            "annee_tournage": "2024"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2020"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2022"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2023"
        },
        {
            "annee_tournage": "2024"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2019"
        },
        {
            "annee_tournage": "2021"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2016"
        },
        {
            "annee_tournage": "2017"
        },
        {
            "annee_tournage": "2018"
        },
        {
            "annee_tournage": "2017"
        }
    ]
}

export function TotalCount() {
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


  const countByResponse : any = {};

for (const results of data.results) {
    const  annee_tournage = results.annee_tournage;
    if (countByResponse[annee_tournage] === undefined) {
        countByResponse [annee_tournage] = 1;
    }
    else {
        countByResponse[annee_tournage] = countByResponse[annee_tournage] +1;
    }
    
}

  //   return <p>data</p>;
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data);
  //   }

//   let temp = [2016, 2017, 2020, 2019];

//   for (const el of data.results) {
//     for (let i = 0; i < temp.length; i++){
//         if (el === temp[i]) {
//             +1 ---> temp[i]
//         } 
//         else{
//             temp.push(el)
//         }

//     }
//   }

//   console.log(temp);
  //   return data.results;
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i].year);
  //   }
}

    // const data = [
    //   {
    //     year: "2012",
    //     total: 1345,
    //   },
    //   {
    //     year: "2013",
    //     total: 1345,
    //   },
    //   {
    //     year: "2014",
    //     total: 3445,
    //   },
    // ];

// export default function Firstgraph() {
//   return (
//     <LineChart
//       style={{
//         width: "100%",
//         maxWidth: "700px",
//         height: "100%",
//         maxHeight: "70vh",
//         aspectRatio: 1.618,
//       }}
//       responsive
//       data={countByResponse}
//       margin={{
//         top: 5,
//         right: 0,
//         left: 0,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="annee_tournage" />
//       <YAxis width="auto" />
//       <Tooltip />
//       <Legend />
//       <Line
//         type="monotone"
//         dataKey="total"
//         stroke="#8884d8"
//         activeDot={{ r: 8 }}
//       />
//     </LineChart>
//     // <p>{TotalCount()}</p>
//   );
// }
