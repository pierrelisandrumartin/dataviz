import { useQuery } from '@tanstack/react-query'

export default function TotalCount() {
  const { data, isPending, error } = useQuery({
    queryKey: ['totalCount2016'],
    queryFn: async () => {
        const url = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records";
        url.searchParams.set("where", annee_tournage = date'2016');

        const response = await fetch(url.toString())
        if (!response.ok) throw new Error('Erreur API')
        return response.json()
    }
  })

  if (isPending) return <p>Chargement…</p>
  if (error) return <p>Erreur : {error.message}</p>

  return <p>Total 2016 : {data.total_count}</p>
}

