import React, { useEffect, useState } from "react";

function UseDebounce(value, delay = 1000) {
  const [debouncing, setDebouncing] = useState(value);
  useEffect(() => {
    const debounc = setTimeout(() => {
      setDebouncing(value);
    }, delay);
    return () => clearTimeout(debounc);
  }, [value, delay]);
  return debouncing;
}

export default UseDebounce;
