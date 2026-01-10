// import React, { useEffect, useState } from "react";

// function Debouncing() {
//   const [search, setSearch] = useState("");
//   const [filteredNames, setFilteredNames] = useState([]);
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
//     const handler = setTimeout(() => {
//       if (!search) {
//         setFilteredNames(Names);
//       } else {
//         const filter = Names.filter((item) => {
//           return item.toLowerCase().includes(search.toLowerCase());
//         });
//         setFilteredNames(filter);
//       }
//     }, 1000);
//     return () => clearTimeout(handler);
//   }, [search]);

//   return (
//     <>
//       <p>Debouncing</p>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredNames.length > 0
//         ? filteredNames.map((item, index) => {
//             return (
//               <div>
//                 <ul>
//                   <li>{item}</li>
//                 </ul>
//               </div>
//             );
//           })
//         : "no data found"}
//     </>
//   );
// }

// export default Debouncing;

import React, { useState, useEffect } from "react";

function Debouncing() {
  const [Search, setSearch] = useState("");
  const [myfilterData, setFilterData] = useState([]);
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
      if (!Search) {
        setFilterData(Names);
      } else {
        let filterData = Names.filter((item) => {
          return item.toLowerCase().includes(Search.toLowerCase());
        });
        setFilterData(filterData);
      }
    }, 1000);
    return () => clearTimeout(debouncing);
  }, [Search]);

  return (
    <>
      <p>Debouncing</p>
      <input
        type="search"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {myfilterData.map((item, index) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Debouncing;
