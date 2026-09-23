import React, { useState } from "react";

function CountryCity() {
  const [selectCountry, setSelectCountry] = useState([]);
  const [Citydata, setCityData] = useState([]);
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
      id: 6,
      country: "Germany",
      cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    },
    {
      id: 7,
      country: "Brazil",
      cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Recife"],
    },
    {
      id: 8,
      country: "France",
      cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    },
    {
      id: 9,
      country: "South Africa",
      cities: [
        "Johannesburg",
        "Cape Town",
        "Durban",
        "Pretoria",
        "Port Elizabeth",
      ],
    },
    {
      id: 10,

      country: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
    },
  ];

  function handleSelectCountry(e) {
    const Country = Number(e.target.value);
    console.log(Country);
    setSelectCountry(Country);

    const city = countries.find((item, index) => item.id === Country);
    console.log(city);
    const cityname = city?.cities || [];
    console.log(cityname);
    if (cityname) {
      setCityData(cityname);
    } else {
      setCityData([]);
    }
  }
  return (
    <div>
      <p>CountryCity</p>
      <select value={selectCountry} onChange={(e) => handleSelectCountry(e)}>
        <option value="">Select Country</option>
        {countries.length > 0
          ? countries.map((item, index) => {
              return (
                <>
                  <option value={item.id}>{item.country}</option>
                </>
              );
            })
          : "no country available"}
      </select>

      <select name="" id="" disabled={!Citydata.length}>
        <option value="">select city</option>
        {Citydata.length > 0
          ? Citydata.map((item) => {
              return <option key={item}> {item}</option>;
            })
          : "no city availble"}
      </select>
    </div>
  );
}

export default CountryCity;
