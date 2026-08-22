import React, { useEffect, useState } from "react";
import CustomHook1Data from "./CustomHook1Data";
import ReactPaginate from "react-paginate";
function CustomHook1() {
  const { userData, loading, error } = CustomHook1Data(
    "https://jsonplaceholder.typicode.com/comments",
  );

  const [itemOffset, SetItemOffSet] = useState(0);
  const ItemPerPage = 15;
  const endOffSet = itemOffset + ItemPerPage;
  const CurrentPage = userData.slice(itemOffset, endOffSet);
  const PageCount = Math.ceil(userData.length / ItemPerPage);
  const [search, setSearch] = useState("");
  const [debouncing, setDebouncing] = useState("");

  function handleChange({ selected }) {
    const data = selected * ItemPerPage;
    SetItemOffSet(data);
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncing(search);
      return () => clearTimeout(debounce);
    }, 1000);
  }, [search]);

  const filter = CurrentPage.filter((item) => {
    return item.name.toLowerCase().includes(debouncing.toLowerCase());
  });

  return (
    <div>
      CustomHook1
      <ul>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filter.length > 0
          ? filter.map((user) => {
              return (
                <div key={user.id}>
                  <li>{user.name}</li>
                </div>
              );
            })
          : "no user Found"}
      </ul>
      <ReactPaginate
        nextLabel="Next"
        pageCount={PageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        onPageChange={handleChange}
      />
    </div>
  );
}

export default CustomHook1;
