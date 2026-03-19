// import React, { useState, useEffect } from "react";

// function Debouncing() {
//   const [Search, setSearch] = useState("");
//   const [myfilterData, setFilterData] = useState([]);
//   const Names = [
//     "Anil",
//     "Sunil",
//     "Kiran",
//     "Sohan",
//     "Mohan",
//     "Ramesh",
//     "Suresh",
//     "Dinesh",
//     "Rajesh",
//     "Mahesh",
//   ];

//   useEffect(() => {
//     const Debouncing = setTimeout(() => {
//       console.log(Search);
//       if (!Search) {
//         setFilterData(Names);
//       } else {
//         const filter = Names.filter((item, index) => {
//           return item.toLowerCase().includes(Search.toLowerCase());
//         });
//         setFilterData(filter);
//       }
//     }, 1000);
//     return () => clearTimeout(Debouncing);
//   }, [Search]);
//   return (
//     <>
//       <p>Debouncing</p>

//       <input
//         type="search"
//         value={Search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {myfilterData.map((item, index) => {
//         return (
//           <ul key={index}>
//             <li>{item}</li>
//           </ul>
//         );
//       })}
//     </>
//   );
// }

// export default Debouncing;

import { debounce } from "@mui/material";
import React, { useEffect, useState } from "react";

function Debouncing() {
  const [search, setSearch] = useState("");
  const [Debouncing, setDebouncing] = useState([]);
  const Names = [
    "Anil",
    "Sunil",
    "Kiran",
    "Sohan",
    "Mohan",
    "Ramesh",
    "Suresh",
    "Dinesh",
    "Rajesh",
    "Mahesh",
  ];

  useEffect(() => {
    const debouncing = setTimeout(() => {
      if (!search) {
        setDebouncing(Names);
      } else {
        const result = Names.filter((item, index) => {
          return item.toLowerCase().includes(search.toLowerCase());
        });
        setDebouncing(result);
      }
    }, 1000);
    return () => clearTimeout(debouncing);
  }, [search]);
  return (
    <div>
      <p>Debouncing</p>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {Debouncing.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Debouncing;
