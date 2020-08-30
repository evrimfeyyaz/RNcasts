import React from "react";
import { CityItem } from "./CityItem";

export const CityList = () => {
  const citiesData = [
    {
      id: "berlin",
      name: "Berlin",
      country: "Germany",
      population: 3769000,
    },
    {
      id: "istanbul",
      name: "Istanbul",
      country: "Turkey",
      population: 15520000,
    },
    {
      id: "san-francisco",
      name: "San Francisco",
      country: "United States of America",
      population: 883305,
    },
  ];

  const citiesList = citiesData.map((city) => (
    <CityItem city={city} key={city.id} />
  ));

  return <div>{citiesList}</div>;
};
