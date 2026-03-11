import React, { useEffect, useState } from "react";

function CustomHook(url) {
  const [Loading, setLoading] = useState(false);
  const [UserData, setUserData] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    async function GetUserData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        seterror(error);
      }
    }
    GetUserData();
  }, [url]);
  return { Loading, UserData, error };
}

export default CustomHook;
