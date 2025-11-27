import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function Pegination() {
  const [Loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);
  const ItemPerPage = 15;
  const pageCount = Math.ceil(userData.length / ItemPerPage);
  const endOffset = itemOffset * ItemPerPage;
  const currentItems = userData.slice(endOffset, endOffset + ItemPerPage);
  useEffect(() => {
    async function getUserData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://68e5ff1521dd31f22cc3ac70.mockapi.io/get/user/user"
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, []);

  if (!Loading) {
    return <h2> Loading ....</h2>;
  }

  function handlePageClick({ selected }) {
    setItemOffset(selected);
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(array.length);
  console.log(array[0]);

  function reverse(word) {
    var newreversed = "";
    for (var i = word.length - 1; i >= 0; i--) {
      newreversed += word[i];
      // return newreversed;
    }
    console.log(newreversed);
  }
  reverse("faizan khan");

  
  return (
    <>
      <p>Pegination</p>
      {currentItems.length > 0
        ? currentItems.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })
        : "no Data found"}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pegination;
