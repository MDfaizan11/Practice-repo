import React, { useState } from "react";

function City() {
  const countries = [
    {
      country: "United States",
      cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    },
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Liverpool", "Edinburgh"],
    },
    {
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    },
    {
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

  const [selectedCountry, setSelectesCountry] = useState("");
  console.log(selectedCountry);
  const [CityName, setCityName] = useState([]);
  function handleSelected(e) {
    const myCountryName = e.target.value;
    setSelectesCountry(myCountryName);

    const singleCountry = countries.find(
      (countryName) => countryName.country.trim() === myCountryName.trim()
    );
    setCityName(singleCountry ? singleCountry.cities : []);
  }
  return (
    <>
      <p>City</p>

      <select name="" id="" value={selectedCountry} onChange={handleSelected}>
        <option value="">Select Country</option>
        {countries.map((country, index) => {
          return (
            <>
              <option value={country.country} key={index}>
                {country.country}
              </option>
            </>
          );
        })}
      </select>

      <select name="" id="">
        <option value="">Select City</option>
        {CityName.map((city, index) => {
          return (
            <>
              <option value={city} key={index}>
                {city}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
}

export default City;
