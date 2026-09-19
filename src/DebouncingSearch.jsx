import React, { useEffect, useState } from "react";
import useDebounce from "./CustomDebounce";

function DebouncingSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setData([]);
      return;
    }

    async function getCountries() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://countries.dev/name/${encodeURIComponent(debouncedSearch)}`,
        );

        if (!response.ok) {
          setData([]);
          return;
        }

        const result = await response.json();

        console.log(result);
        setData([result]);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, [debouncedSearch]);

  return (
    <div>
      <h2>Country Search</h2>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search country..."
      />

      {loading && <p>Loading...</p>}

      <ul>
        {data.map((country) => (
          <li key={country.id}>{country.demonym}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncingSearch;
