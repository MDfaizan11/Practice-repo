import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress, Pagination } from "@mui/material";
function MatrialPegination() {
  const [PostData, setPostData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Page, setPage] = useState(1);
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

  if (Loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <p>MatrialPegination</p>
      {PostData.length > 0 ? (
        PostData.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>No Data Found</p>
      )}

      {/* <Pagination count={} page={Page} /> */}
    </>
  );
}

export default MatrialPegination;
