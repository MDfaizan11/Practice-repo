import React, { useEffect, useState } from "react";

function CustomHook1Data(url) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function GetUserData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    GetUserData();
  }, [url]);
  return { userData, loading, error };
}

export default CustomHook1Data;
