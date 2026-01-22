import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <p>Parent</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <Child name={"faizan"} />
    </div>
  );
}

export default Parent;
