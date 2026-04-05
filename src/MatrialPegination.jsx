// import React, { useEffect, useState } from "react";
// import { CircularProgress } from "@mui/material";
// import ReactPaginate from "react-paginate";
// import "./materialPegination.css";

// function MatrialPegination() {
//   const [PostData, setPostData] = useState([]);
//   const [Loading, setLoading] = useState(false);
//   const [itemOffset, setItemOffset] = useState(0);

//   const itemPerPage = 15;

//   // Calculate current items
//   const endOffset = itemOffset + itemPerPage;
//   const FinalData = PostData.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(PostData.length / itemPerPage);

//   // Fetch Data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await res.json();
//         setPostData(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle page change
//   const handleChange = ({ selected }) => {
//     const newOffset = selected * itemPerPage;
//     setItemOffset(newOffset);
//   };

//   // Loading state
//   if (Loading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <CircularProgress />
//       </div>
//     );
//   }

//   return (
//     <>
//       <h3 style={{ textAlign: "center" }}>Material Pagination</h3>

//       {FinalData.length > 0 ? (
//         FinalData.map((item) => (
//           <div key={item.id} className="post">
//             {item.title}
//           </div>
//         ))
//       ) : (
//         <p>No Data Found</p>
//       )}

//       <ReactPaginate
//         pageCount={pageCount}
//         nextLabel="Next >"
//         previousLabel="< Previous"
//         onPageChange={handleChange}
//         containerClassName="pegination"
//         activeClassName="active"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         nextClassName="page-item"
//       />
//     </>
//   );
// }

// export default MatrialPegination;

import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function MatrialPegination() {
  const [PostData, setPostData] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        console.log(data);
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getUserData();
  }, []);
  if (Loading) {
    return <CircularProgress />;
  }
  return <div>
    <p>
      
    </p>
    MatrialPegination</div>;
}

export default MatrialPegination;
