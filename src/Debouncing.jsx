import React, { useEffect, useState } from "react";

function Debouncing() {
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
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
    const handler = setTimeout(() => {
      if (!search) {
        setFilteredNames(Names);
      } else {
        const filter = Names.filter((item) => {
          return item.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredNames(filter);
      }
    }, 1000);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <>
      <p>Debouncing</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNames.length > 0
        ? filteredNames.map((item, index) => {
            return (
              <div>
                <ul>
                  <li>{item}</li>
                </ul>
              </div>
            );
          })
        : "no data found"}
    </>
  );
}

export default Debouncing;
