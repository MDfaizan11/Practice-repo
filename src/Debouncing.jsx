// import React, { useEffect, useState } from "react";

// function Debouncing() {
//   const [search, setSearch] = useState("");
//   const [Debouncing, setDebouncing] = useState([]);
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
//     const debouncing = setTimeout(() => {
//       if (!search) {
//         setDebouncing(Names);
//       } else {
//         const result = Names.filter((item, index) => {
//           return item.toLowerCase().includes(search.toLowerCase());
//         });
//         setDebouncing(result);
//       }
//     }, 1000);
//     return () => clearTimeout(debouncing);
//   }, [search]);
//   return (
//     <div>
//       <p>Debouncing</p>

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {Debouncing.map((item, index) => {
//         return (
//           <ul key={index}>
//             <li>{item}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }

// export default Debouncing;

import React, { useEffect, useState } from "react";

function Debouncing() {
  const [search, setSearch] = useState("");
  const [DebouncingSearch, setDebouncingSearch] = useState([]);
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
    let searchDebounce = setTimeout(() => {
      if (!search) {
        setDebouncingSearch(Names);
      } else {
        let result = Names.filter((item, index) => {
          return item.toLowerCase().includes(search.toLowerCase());
        });
        setDebouncingSearch(result);
      }
    }, 1000);
    return () => clearTimeout(searchDebounce);
  }, [search]);
  return (
    <>
      <p>Debouncing</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {DebouncingSearch.map((item, index) => {
        return (
          <>
            <ul key={index}>
              <li>{item}</li>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Debouncing;
