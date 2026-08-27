// import React, { useEffect, useState } from "react";

// function Search() {
//   const [search, setSearch] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Don't search if less than 2 characters
//     if (search.trim().length < 2) {
//       setCountries([]);
//       return;
//     }

//     // Debouncing
//     const timer = setTimeout(async () => {
//       try {
//         setLoading(true);
//         setIsFocused(true);

//         const response = await fetch(
//           `https://countries.dev/name/${encodeURIComponent(search)}?fields=name,alpha2Code,flag`,
//         );

//      const data = await response.json();

//         setCountries(data);
//       } catch (error) {
//         console.log(error);
//         setCountries([]);
//       } finally {
//         setLoading(false);
//       }
//     }, 500);

//     // Cleanup previous timer
//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleSelect = (country) => {
//     setSearch(country.name);
//     setCountries([]);
//     // setIsFocused(false);
//   };

//   return (
//     <div style={{ width: "300px", margin: "50px auto" }}>
//       <h2>Country Search</h2>

//       <input
//         type="search"
//         value={search}
//         onFocus={() => setIsFocused(true)}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder={isFocused ? "Min 2 characters" : "Enter country name"}
//         style={{
//           width: "100%",
//           padding: "10px",
//           boxSizing: "border-box",
//         }}
//       />

//       {isFocused && search.length >= 2 && (
//         <div
//           style={{
//             border: "1px solid #ddd",
//             marginTop: "5px",
//             maxHeight: "250px",
//             overflowY: "auto",
//           }}
//         >
//           {loading && <p>Searching...</p>}

//           {!loading && countries.length === 0 && (
//             <p style={{ padding: "10px" }}>No country found</p>
//           )}

//           {!loading &&
//             countries.map((country) => (
//               <div
//                 key={country.alpha2Code}
//                 onClick={() => handleSelect(country)}
//                 style={{
//                   padding: "10px",
//                   cursor: "pointer",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 {country.flag} {country.name}
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [isFocused, setIsFocus] = useState(false);
  useEffect(() => {
    if (search.trim().length < 2) {
      return setCountry([]);
    }
    const debouncingdata = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://countries.dev/name/${encodeURIComponent(search)}?fields=name,alpha2Code,flag`,
        );

        const data = await response.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearTimeout(debouncingdata);
  }, [search]);

  function handleCountry(name) {
    console.log(name);
  }
  return (
    <div>
      <p> Search</p>
      <input
        type="search"
        value={search}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={isFocused ? "min 2 cha" : "enter country name"}
      />

      {country.map((item) => {
        return (
          <div key={item.name} onClick={() => handleCountry(item.name)}>
            <li>{item.name}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
