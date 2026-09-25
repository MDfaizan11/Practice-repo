import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
function DebouncingList() {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [itemOffset, setItemOffSet] = useState(0);
  const ItemPerPage = 15;
  const endOffset = itemOffset + ItemPerPage;
  const pageCount = Math.ceil(userData.length / ItemPerPage);
  useEffect(() => {
    async function getUserData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    const debouce = setTimeout(() => {
      setDebouncing(search);
    }, 1000);

    return () => clearTimeout(debouce);
  }, [search]);

  const filterdata = userData.filter((item) => {
    return item.title.toLowerCase().includes(debouncing.toLowerCase());
  });

  const currentPage = filterdata.slice(itemOffset, endOffset);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  function handlePageChange({ selected }) {
    const nextpage = selected * ItemPerPage;
    setItemOffSet(nextpage);
  }
  return (
    <div>
      <p>DebouncingList</p>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {currentPage.length > 0
        ? currentPage.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })
        : "No user Availble"}

      <ReactPaginate
        nextLabel="next >"
        previousLabel="< previous"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default DebouncingList;
