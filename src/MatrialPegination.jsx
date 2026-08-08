import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function MatrialPegination() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");
  const [itemOffset, setItemOffset] = useState(0);

  const ItemPerPage = 15;
  const endOffset = itemOffset + ItemPerPage;
  const currentData = userData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / ItemPerPage);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        const data = await response.json();

        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  function handlePageClick({ selected }) {
    const select = selected * ItemPerPage;
    setItemOffset(select);
  }

  useEffect(() => {
    const debouncing = setTimeout(() => {
      setDebouncing(search);
    }, 1000);
    return () => clearTimeout(debouncing);
  }, [search, debouncing]);

  const filterData = currentData.filter((item, index) => {
    return item.title.toLowerCase().includes(debouncing.toLowerCase());
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>Material Pagination</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filterData.length > 0
          ? filterData.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
              </div>
            ))
          : "No data found"}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        nextLabel="Next"
        previousLabel="Previous"
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
      />

      <style>{`
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        .page-link {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }

        .page-link:hover {
          background-color: #007bff;
          color: white;
        }

        .active .page-link {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </>
  );
}

export default MatrialPegination;
