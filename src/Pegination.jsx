import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function Pegination() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  const [itemOffset, setItemOffSet] = useState(0);
  const ItemPerPage = 15;
  const endOffSet = itemOffset + ItemPerPage;
  const pageCount = Math.ceil(userData.length / ItemPerPage);

  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      try {
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

  function handlechange({ selected }) {
    const data = selected * ItemPerPage;
    setItemOffSet(data);
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncing(search);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [search, debouncing]);

  const filter = userData.filter((item, index) => {
    return item.title.toLowerCase().includes(debouncing.toLowerCase());
  });

  const currentPage = filter.slice(itemOffset, endOffSet);

  return (
    <div>
      <p>Pegination</p>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {currentPage.length > 0
        ? currentPage.map((user) => {
            return <div key={user.id}>{user.title}</div>;
          })
        : "No User Found"}

      <ReactPaginate
        nextLabel="next"
        previousLabel="previous"
        renderOnZeroPageCount={null}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlechange}
      />
    </div>
  );
}

export default Pegination;
