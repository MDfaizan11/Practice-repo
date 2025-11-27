import React, { useEffect, useState } from "react";

function Debouncing() {
  const Name = [
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

  const [search, setSearch] = useState("");
  const [Debouncing, setDebouncing] = useState("");
  useEffect(() => {
    const hanlde = setTimeout(() => {
      if (!search) {
        setDebouncing(Name);
      } else {
        const filterData = Name.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );
        setDebouncing(filterData);
      }
    }, 1000);

    return () => clearTimeout(hanlde);
  }, [search]);
  return (
    <>
      <p>Debouncing</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {Debouncing.length > 0
        ? Debouncing.map((item, index) => {
            return (
              <>
                <p key={index}>{item}</p>
              </>
            );
          })
        : "No Data Found"}
    </>
  );
}

export default Debouncing;
