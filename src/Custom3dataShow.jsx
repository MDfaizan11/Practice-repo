import React, { useEffect, useState } from "react";
import CustomHook3 from "./CustomHook3";

function Custom3dataShow() {
  const { error, loading, data } = CustomHook3(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncing(search);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [search]);

  const Fetchdata = data.filter((item) => {
    return item.name.toLowerCase().includes(debouncing.toLowerCase());
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <p>Custom3dataShow</p>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {Fetchdata.map((item) => {
        return <p>{item.name}</p>;
      })}
    </>
  );
}

export default Custom3dataShow;
