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
    const Debouncing = setTimeout(() => {
      console.log(Search);

      if (!Search) {
        setFilterData(Names);
      } else {
        const filter = Names.filter((item, index) => {
          return item.toLowerCase().includes(Search.toLowerCase());
        });
        setFilterData(filter);
      }
    }, 1000);
    return () => clearTimeout(Debouncing);
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
          <ul key={index}>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Debouncing;
