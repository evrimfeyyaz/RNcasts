import React from "react";

export const CityItem = ({ city }) => {
  return (
    <ul>
      <li>Name: {city.name}</li>
      <li>Population: {city.population}</li>
      <li>Country: {city.country}</li>
    </ul>
  );
};
