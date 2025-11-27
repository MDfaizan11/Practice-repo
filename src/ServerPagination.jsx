import React, { useEffect, useState } from "react";
import { Pagination, Stack, CircularProgress } from "@mui/material";

export default function ServerPagination() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [page]);

  return (
    <div alignItems="center" spacing={2} sx={{ mt: 4 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        data.map((item) => <div key={item.id}>{item.title}</div>)
      )}

      <Pagination count={20} page={page} onChange={(e, val) => setPage(val)} />
    </div>
  );
}
