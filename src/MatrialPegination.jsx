import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import ReactPaginate from "react-paginate";
import "./materialPegination.css";
function MatrialPegination() {
  const [PostData, setPostData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 15;
  const pageCount = Math.ceil(PostData.length / itemPerPage);
  const endOffset = itemOffset * itemPerPage;
  const FinalData = PostData.slice(endOffset, endOffset + itemPerPage);
  const UserData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setPostData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    UserData();
  }, [UserData]);

  function handleChange({ selected }) {
    setItemOffset(selected);
  }

  if (Loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <p>MatrialPegination</p>
      {FinalData.length > 0 ? (
        FinalData.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>No Data Found</p>
      )}

      <ReactPaginate
        pageCount={pageCount}
        nextLabel="Next >"
        previousLabel="< Previous"
        onPageChange={handleChange}
        renderOnZeroPageCount={null}
        containerClassName="pegination"
        activeClassName="active"
      />
    </>
  );
}

export default MatrialPegination;
