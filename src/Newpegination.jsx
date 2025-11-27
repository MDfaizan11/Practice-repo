import React, { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./NewPegination.css"; // ✅ Import external CSS

function Newpegination() {
  const [UserAllData, setUserAllData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncing, setdebouncing] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const ItemPerPage = 15;

  const pageCount = Math.ceil(debouncing.length / ItemPerPage);
  const endOffset = itemOffset * ItemPerPage;
  const currentItems = debouncing.slice(endOffset, endOffset + ItemPerPage);

  const userData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://68e5ff1521dd31f22cc3ac70.mockapi.io/get/user/user"
      );
      const data = await response.json();
      setUserAllData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    userData();
  }, [userData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search) {
        setdebouncing(UserAllData);
      } else {
        const filterdata = UserAllData.filter((data) =>
          data.name.toLowerCase().includes(search.toLowerCase())
        );
        setdebouncing(filterdata);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search, UserAllData]);

  const handlePageClick = ({ selected }) => {
    setItemOffset(selected);
  };

  if (Loading) return <h2>Loading...</h2>;

  const findvol = ["My name is faizan khan"];
  const vol = ["a", "e", "f"];

  function findAllVol(allName) {
    const str = allName.join("").toLowerCase();
    const result = str.split("").filter((char) => vol.includes(char));
    console.log(result);
    console.log(result.length);
  }
  findAllVol(findvol);

  function reverseString(str) {
    const result = [];
    for (let i = str.length - 1; i >= 0; i--) {
      result.push(str[i]);
    }
    const reverse = result.join("");
    console.log(reverse);
    return;
  }
  console.log(reverseString("faizan"));
  return (
    <div className="Newpegination-container">
      <p>User Pagination</p>

      <input
        type="search"
        value={search}
        placeholder="Search by name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {currentItems.length > 0 ? (
        currentItems.map((item, index) => (
          <div key={index} className="user-card">
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="selected"
        disabledClassName="disabled"
      />
    </div>
  );
}

export default Newpegination;
