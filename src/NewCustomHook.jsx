import React, { useEffect, useState } from "react";

function NewCustomHook(url) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getUserData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);
  return { userData, loading, error };
}

export default NewCustomHook;
