import React, { useEffect, useState } from "react";
import "../src/mypegination.css";
import ReactPaginate from "react-paginate";
function Mypegination() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(userData.length / itemsPerPage);
  const endOffset = itemOffset * itemsPerPage;
  const currentItems = userData.slice(endOffset, endOffset + itemsPerPage);
  useEffect(() => {
    const controler = new AbortController();
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://68e5ff1521dd31f22cc3ac70.mockapi.io/get/user/user",
          {
            signal: controler.signal,
          }
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getData();

    return () => controler.abort();
  }, []);

  function handlePageClick({ selected }) {
    setItemOffset(selected);
  }

  if (loading) {
    return <h2> Loading ....</h2>;
  }
  return (
    <>
      <p>my pegination</p>

      {currentItems.length > 0
        ? currentItems.map((item) => {
            return (
              <>
                <p> {item.name}</p>
                <button classname="myadd">add</button>
              </>
            );
          })
        : "no itm found"}

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel="< previous"
        pageRangeDisplayed={5}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
export default Mypegination;

// import React, { useEffect, useState } from "react";
// import { Pagination, Stack } from "@mui/material";

// function MyPagination() {
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const ITEMS_PER_PAGE = 5;

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           "https://68e5ff1521dd31f22cc3ac70.mockapi.io/get/user/user",
//           { signal: controller.signal }
//         );

//         const data = await response.json();

//         // simple client-side pagination
//         const start = (page - 1) * ITEMS_PER_PAGE;
//         const end = start + ITEMS_PER_PAGE;

//         setUsers(data.slice(start, end));
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           console.error(error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();

//     return () => controller.abort();
//   }, [page]);

//   return (
//     <Stack spacing={2} alignItems="center">
//       <h2>Users</h2>

//       {loading && <p>Loading...</p>}

//       {!loading &&
//         users.map((user) => (
//           <p key={user.id}>{user.name}</p>
//         ))}

//       <Pagination
//         count={5}              // total pages
//         page={page}
//         onChange={(e, value) => setPage(value)}
//         color="primary"
//       />
//     </Stack>
//   );
// }

// export default MyPagination;
