// // import React, { useEffect, useState } from "react";

// // function Debouncing() {
// //   const [search, setSearch] = useState("");
// //   const [Debouncing, setDebouncing] = useState([]);
// //   const Names = [
// //     "Anil",
// //     "Sunil",
// //     "Kiran",
// //     "Sohan",
// //     "Mohan",
// //     "Ramesh",
// //     "Suresh",
// //     "Dinesh",
// //     "Rajesh",
// //     "Mahesh",
// //   ];

// //   useEffect(() => {
// //     const debouncing = setTimeout(() => {
// //       if (!search) {
// //         setDebouncing(Names);
// //       } else {
// //         const result = Names.filter((item, index) => {
// //           return item.toLowerCase().includes(search.toLowerCase());
// //         });
// //         setDebouncing(result);
// //       }
// //     }, 1000);
// //     return () => clearTimeout(debouncing);
// //   }, [search]);
// //   return (
// //     <div>
// //       <p>Debouncing</p>

// //       <input
// //         type="text"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       {Debouncing.map((item, index) => {
// //         return (
// //           <ul key={index}>
// //             <li>{item}</li>
// //           </ul>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // export default Debouncing;

// import React, { useEffect, useState } from "react";

// function Debouncing() {
//   const [search, setSearch] = useState("");
//   const [DebouncingSearch, setDebouncingSearch] = useState([]);
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
//     let searchDebounce = setTimeout(() => {
//       if (!search) {
//         setDebouncingSearch(Names);
//       } else {
//         let result = Names.filter((item, index) => {
//           return item.toLowerCase().includes(search.toLowerCase());
//         });
//         setDebouncingSearch(result);
//       }
//     }, 1000);
//     return () => clearTimeout(searchDebounce);
//   }, [search]);
//   return (
//     <>
//       <p>Debouncing</p>
//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {DebouncingSearch.map((item, index) => {
//         return (
//           <>
//             <ul key={index}>
//               <li>{item}</li>
//             </ul>
//           </>
//         );
//       })}
//     </>
//   );
// }

// export default Debouncing;

import React, { useEffect, useState } from "react";

function Debouncing() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [newDebouncing, setNewDebouncing] = useState("");
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
    const debouncFilter = setTimeout(() => {
      setDebouncing(search);
    }, 1000);

    return () => clearTimeout(debouncFilter);
  }, [search, debouncing]);

  const seachData = Names.filter((item) => {
    return item.toLowerCase().includes(debouncing.toLowerCase());
  });

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );
        const data = await response.json();
        setdata(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const debouncingFilter = setTimeout(() => {
      setNewDebouncing(newSearch);
    }, 1000);
    return () => clearTimeout(debouncingFilter);
  }, [newSearch]);

  const filterNewDebouncing = data.filter((item) => {
    return item.name.toLowerCase().includes(newDebouncing.toLocaleLowerCase());
  });
  return (
    <>
      <p>Debouncing</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {seachData.length > 0
          ? seachData.map((item) => {
              return <li>{item}</li>;
            })
          : "No name avaible"}
      </ul>

      <input
        type="search"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      {filterNewDebouncing.length > 0
        ? filterNewDebouncing.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
              </div>
            );
          })
        : "no data found"}
    </>
  );
}

export default Debouncing;
