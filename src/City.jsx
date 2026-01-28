

import React, { useState } from "react";

function City() {
  const countries = [
    {
      id: 1,
      country: "United States",
      cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    },
    {
      id: 2,
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    },
    {
      id: 3,
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Liverpool", "Edinburgh"],
    },
    {
      id: 4,
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    },
    {
      id: 5,
      country: "India",
      cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    },
    {
      country: "Germany",
      cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    },
    {
      country: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
    },
    {
      country: "Brazil",
      cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Recife"],
    },
    {
      country: "France",
      cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    },
    {
      country: "South Africa",
      cities: [
        "Johannesburg",
        "Cape Town",
        "Durban",
        "Pretoria",
        "Port Elizabeth",
      ],
    },
  ];
  const [cities, setCities] = useState([]);
  const [SelectedCountry, setSelectedCountry] = useState([]);

  function handleSelectCountry(e) {
    const myCountry = e.target.value;
    console.log(myCountry);
    setSelectedCountry(myCountry);
    const cities = countries.find((item) => item.country === myCountry);
    setCities(cities?.cities || []);
  }
  return (
    <>
      <p>City</p>
      <select
        value={SelectedCountry}
        onChange={handleSelectCountry}
      >
        <option value="">Select Country</option>
        {countries.map((item, index) => {
          return (
            <option value={item.country} key={item.id}>
              {item.country}
            </option>
          );
        })}
      </select>
      <select>
        <option value="">select cities</option>
        {cities.map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </>
  );
}

export default City;
