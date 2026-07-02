import React, { useEffect, useState } from "react";
import CustomHook3 from "./CustomHook3";
import ReactPaginate from "react-paginate";
function Custom3dataShow() {
  const { error, loading, data } = CustomHook3(
    "https://jsonplaceholder.typicode.com/comments",
  );
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 15;
  const endOffset = itemOffset + itemPerPage;
  const CurrentPageItm = data.slice(itemOffset, endOffset);
  const PageCount = Math.ceil(data.length / itemPerPage);
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
      {CurrentPageItm.map((item) => {
        return <p>{item.name}</p>;
      })}

      <ReactPaginate
        nextLabel="next >"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onPageChange={({ selected }) => {
          const newOffset = selected * itemPerPage;
          setItemOffset(newOffset);
        }}
        containerClassName="pagination"
        pageCount={PageCount}
      />
    </>
  );
}

export default Custom3dataShow;
