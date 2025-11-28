import { useState } from "react";

interface keys {
  total_count: number;
  results: Array<any>;
}

export default function Borough() {
  const paris: keys = {
    total_count: 14760,
    results: [
      {
        id_lieu: "2016-1939",
        annee_tournage: "2016",
        type_tournage: "S\u00e9rie TV",
        nom_tournage: "LES HOMMES DE L'OMBRE",
        nom_realisateur: "FRED GARSON",
        nom_producteur: "MACONDO",
        adresse_lieu: "AVENUE\u00a0 DU PRESIDENT WILSON",
        ardt_lieu: "75016",
        date_debut: "2016-02-13",
        date_fin: "2016-02-13",
        coord_x: 2.29457,
        coord_y: 48.864614,
        geo_shape: {
          type: "Feature",
          geometry: {
            coordinates: [2.294570000235056, 48.864614000274074],
            type: "Point",
          },
          properties: {},
        },
        geo_point_2d: { lon: 2.294570000235056, lat: 48.864614000274074 },
      },
      {
        id_lieu: "2016-1495",
        annee_tournage: "2016",
        type_tournage: "Long m\u00e9trage",
        nom_tournage: "MAMAN A TORT",
        nom_realisateur: "MARC FITOUSSI",
        nom_producteur: "AVENUE B",
        adresse_lieu: "PLACE\u00a0 D'ITALIE",
        ardt_lieu: "75013",
        date_debut: "2016-01-06",
        date_fin: "2016-01-06",
        coord_x: 2.355564,
        coord_y: 48.832294,
        geo_shape: {
          type: "Feature",
          geometry: {
            coordinates: [2.355563999715622, 48.83229399959034],
            type: "Point",
          },
          properties: {},
        },
        geo_point_2d: { lon: 2.355563999715622, lat: 48.83229399959034 },
      },
    ],
  };
  const [data, setData] = useState(paris);

  return (
    <>
      <h1>{data.results.map((item) => item.annee_tournage)}</h1>
      <h1></h1>
    </>
  );
}
