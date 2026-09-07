import React, { useEffect, useState } from "react";

function CustomHook3(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function FetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    FetchData();
  }, [url]);
  return { data, loading, error };
}

export default CustomHook3;
