// import React, { useState } from "react";

// function City() {
//   const [Cities, setCities] = useState([]);
//   const [SelectCountry, setSelectedCountry] = useState([]);
//   const [SelectedCountryId, setSelectedCountryId] = useState([]);
//   console.log(SelectedCountryId);
//   console.log(Cities);
//   console.log(SelectCountry);

//   const countries = [
//     {
//       id: 1,
//       country: "United States",
//       cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
//     },
//     {
//       id: 2,
//       country: "Canada",
//       cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
//     },
//     {
//       id: 3,
//       country: "United Kingdom",
//       cities: ["London", "Manchester", "Birmingham", "Liverpool", "Edinburgh"],
//     },
//     {
//       id: 4,
//       country: "Australia",
//       cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
//     },
//     {
//       id: 5,
//       country: "India",
//       cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
//     },
//     {
//       country: "Germany",
//       cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
//     },
//     {
//       country: "Japan",
//       cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
//     },
//     {
//       country: "Brazil",
//       cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Recife"],
//     },
//     {
//       country: "France",
//       cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
//     },
//     {
//       country: "South Africa",
//       cities: [
//         "Johannesburg",
//         "Cape Town",
//         "Durban",
//         "Pretoria",
//         "Port Elizabeth",
//       ],
//     },
//   ];

//   function handleSelectCountry(e) {
//     let CountryName = e.target.value;
//     setSelectedCountry(CountryName);
//     console.log(CountryName);
//     const FindCity = countries.find((item) => item.country === CountryName);
//     console.log(FindCity);
//     setSelectedCountryId(FindCity?.id || []);
//     const city = FindCity?.cities || [];
//     console.log(city);
//     setCities(city);
//   }

//   return (
//     <>
//       <p>City</p>
//       <select
//         name=""
//         id=""
//         value={SelectCountry}
//         onChange={handleSelectCountry}
//       >
//         <option value=""> Select Country</option>
//         {countries.length > 0
//           ? countries.map((item, index) => {
//               return (
//                 <option key={item.id} value={item.country}>
//                   {item.country}
//                 </option>
//               );
//             })
//           : "No Country Avaialble this time"}
//       </select>

//       <select name="" id="" disabled={!Cities.length}>
//         <option value="">Select City</option>
//         {Cities.length > 0
//           ? Cities.map((item, index) => {
//               return <option value={item}>{item}</option>;
//             })
//           : "No City Available"}
//       </select>
//     </>
//   );
// }

// export default City;

import React, { useState } from "react";

function City() {
  const [selectCountry, setSelectCountry] = useState([]);
  const [City, setCity] = useState([]);
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

  function handleSelectCountry(e) {
    const country = e.target.value;
    console.log(country);
    setSelectCountry(country);
    const city = countries.find((item, index) => item.country === country);
    setCity(city?.cities || []);
  }
  return (
    <>
      <p>City</p>
      <select
        name=""
        id=""
        value={selectCountry}
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

      <select name="" id="" disabled={!City.length}>
        <option value="">selectCity</option>
        {City.length > 0
          ? City.map((item, index) => {
              return <option value={item}>{item}</option>;
            })
          : "no city Found"}
      </select>
    </>
  );
}

export default City;
