import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useQuery } from '@tanstack/react-query'

// #endregion
function SimpleBarChart() {

  const { data, isPending, error } = useQuery({
    queryKey : ['SimpleBarChart'],
    queryFn : async() => {
      const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
      url.searchParams.set("limit", "100");

      const response = await fetch(url.toString());
      return await response.json();
    }
  })

  const directorAndValueData : {director : string, value : number}[] = []

  for (const value of data.results) {
    const found = directorAndValueData.find(r => r.director === value.nom_realisateur)

    if(!found) {
      const found : {director : string, value : number} = {
        director: value.nom_realisateur,
        value: 1,
      };
      directorAndValueData.push(found);
    } else
      found!.value++; 
  }

  console.log(directorAndValueData);

  console.log(data)



  if (isPending) return <p>Chargement...</p>
  if (error) return <p>Error : {error.message}</p>

// // #region Sample data
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={directorAndValueData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="director" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
   </BarChart>
  );
};




export default function DirectorGraphPage() {
  return (
    <>
    <Navbar/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-blue-300">-----   D i r e c t o r  G r a p h  P a g e   -----</p>
        Nostrum sit ab iure fuga distinctio eaque mollitia aut voluptatibus
        officia temporibus, saepe quae illum quidem numquam deserunt. Est
        pariatur libero maxime, nisi iusto excepturi officia alias aut magnam
        corrupti laborum illum iste, esse hic reprehenderit, optio eligendi quis
        placeat! Dolor temporibus quos sequi error fugiat facere.
      </p>
      {SimpleBarChart()}
      <ExitButton/>
    </>
  );
}
