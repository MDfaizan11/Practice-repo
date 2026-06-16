// // import React, { useEffect, useState } from "react";
// // import { CircularProgress } from "@mui/material";
// // import ReactPaginate from "react-paginate";
// // import "./materialPegination.css";

// // function MatrialPegination() {
// //   const [PostData, setPostData] = useState([]);
// //   const [Loading, setLoading] = useState(false);
// //   const [itemOffset, setItemOffset] = useState(0);

// //   const itemPerPage = 15;

// //   // Calculate current items
// //   const endOffset = itemOffset + itemPerPage;
// //   const FinalData = PostData.slice(itemOffset, endOffset);
// //   const pageCount = Math.ceil(PostData.length / itemPerPage);

// //   // Fetch Data
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// //         const data = await res.json();
// //         setPostData(data);
// //       } catch (error) {
// //         console.log(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Handle page change
// //   const handleChange = ({ selected }) => {
// //     const newOffset = selected * itemPerPage;
// //     setItemOffset(newOffset);
// //   };

// //   // Loading state
// //   if (Loading) {
// //     return (
// //       <div style={{ textAlign: "center", marginTop: "20px" }}>
// //         <CircularProgress />
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <h3 style={{ textAlign: "center" }}>Material Pagination</h3>

// //       {FinalData.length > 0 ? (
// //         FinalData.map((item) => (
// //           <div key={item.id} className="post">
// //             {item.title}
// //           </div>
// //         ))
// //       ) : (
// //         <p>No Data Found</p>
// //       )}

// //       <ReactPaginate
// //         pageCount={pageCount}
// //         nextLabel="Next >"
// //         previousLabel="< Previous"
// //         onPageChange={handleChange}
// //         containerClassName="pegination"
// //         activeClassName="active"
// //         pageClassName="page-item"
// //         pageLinkClassName="page-link"
// //         previousClassName="page-item"
// //         nextClassName="page-item"
// //       />
// //     </>
// //   );
// // }

// // export default MatrialPegination;

// import React, { useEffect, useState } from "react";
// import { CircularProgress } from "@mui/material";
// import ReactPaginate from "react-paginate";
// function MatrialPegination() {
//   const [PostData, setPostData] = useState([]);
//   const [Loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemPerPage = 15;
//   const endOffset = itemOffset + itemPerPage;
//   const currentItems = PostData.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(PostData.length / itemPerPage);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [DebouncedSearchTerm, setDebouncedSearchTerm] = useState("");
//   useEffect(() => {
//     async function getData() {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts",
//         );
//         const data = await response.json();
//         console.log(data);
//         setPostData(data);

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData();
//   }, []);

//   function handlePageClick({ selected }) {
//     const newOffset = selected * itemPerPage;
//     setItemOffset(newOffset);
//   }

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 1000);

//     return () => clearTimeout(debounceTimer);
//   }, [searchTerm]);

//   const filteredData = currentItems.filter((item) =>
//     item.title.toLowerCase().includes(DebouncedSearchTerm.toLowerCase()),
//   );

//   if (Loading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <CircularProgress />
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <p>Error: {error.message}</p>
//       </div>
//     );
//   }
//   return (
//     <>
//       <p>material pegination</p>
//       <input
//         type="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredData.length > 0
//         ? filteredData.map((item, index) => {
//             return <div key={item.id}>{item.title}</div>;
//           })
//         : "no data found"}

//       <ReactPaginate
//         pageCount={pageCount}
//         breakLabel="..."
//         nextLabel="next >"
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//         onPageChange={handlePageClick}
//         containerClassName="pagination"
//       />
//     </>
//   );
// }
// export default MatrialPegination;

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function MatrialPegination() {
  const [allUserData, setAllUserData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Search, setSearch] = useState("");
  const [DebouncingSearch, setDebouncingSearch] = useState("");

  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 15;
  const endOffSet = itemOffset + itemPerPage;
  const CurrentPageList = allUserData.slice(itemOffset, endOffSet);
  const pageCount = Math.ceil(allUserData.length / itemPerPage);
  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        console.log(data);
        setAllUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  function handlePageClick({ selected }) {
    const newOffset = selected * itemPerPage;
    setItemOffset(newOffset);
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncingSearch(Search);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [Search]);

  const filter = CurrentPageList.filter((item, index) =>
    item.title.toLowerCase().includes(DebouncingSearch.toLowerCase()),
  );

  function handleItemClick(id) {
    alert(`You clicked on item with id: ${id}`);
  }
  if (Loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  return (
    <>
      <p>MatrialPegination</p>

      <input
        type="search"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filter.length > 0
        ? filter.map((item, index) => {
            return (
              <div>
                <ul>
                  <li key={item.id} onClick={() => handleItemClick(item.id)}>
                    {item.title}
                  </li>
                </ul>
              </div>
            );
          })
        : "no data found"}
      <ReactPaginate
        pageCount={pageCount}
        nextLabel="next >"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakLabel="..."
        onPageChange={handlePageClick}
      />
    </>
  );
}

export default MatrialPegination;
