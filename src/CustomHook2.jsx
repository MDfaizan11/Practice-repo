import React, { useEffect, useState } from "react";

function CustomHook2(url) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    getData();
  }, [url]);
  return { userData, loading, error };
}

export default CustomHook2;
