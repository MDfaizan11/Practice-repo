import React, { useEffect, useState } from "react";

function CustomDebounce(value, delay = 500) {
  const [debouncing, setDebouncing] = useState(value);
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncing(value);
    }, delay);
    return () => clearTimeout(debounce);
  }, [value, delay]);
  return debouncing;
}

export default CustomDebounce;
