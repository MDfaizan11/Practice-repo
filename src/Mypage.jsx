import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../src/mypegination.css";
function Mypage() {
  const [UserData, setUserData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [itemOffSet, setItemOffSet] = useState(0);
  const ItemPerPage = 10;
  const PageCount = Math.ceil(UserData.length / ItemPerPage);
  const endOffSet = itemOffSet * ItemPerPage;
  const Currentdata = UserData.slice(endOffSet, endOffSet + ItemPerPage);
  useEffect(() => {
    const control = new AbortController();
    async function getUserData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://68e5ff1521dd31f22cc3ac70.mockapi.io/get/user/user",
          { signal: control.signal }
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getUserData();

    return () => control.abort();
  }, []);

  function handlePageChange({ selected }) {
    setItemOffSet(selected);
  }

  if (Loading) {
    return <h2>Loading Data ....</h2>;
  }

  return (
    <>
      <p>Mypage</p>
      {Currentdata.length > 0
        ? Currentdata.map((item, index) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <button classname="myadd">add</button>
              </div>
            );
          })
        : "No Data Found"}

      <ReactPaginate
        nextLabel="> Next"
        previousLabel="< Previous"
        pageCount={PageCount}
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        containerClassName="Pegination"
        activeClassName="active"
      />
    </>
  );
}

export default Mypage;
