import React from "react";

function LinearSearch() {
  const array = [10, 20, 40, 60, 90];
  const target = 40;

  function findTarget(arry, target) {
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] === target) {
        return i;
      }
    }
    return -1;
  }

  const result = findTarget(array, target);
  console.log(result);
  
  return <div>LinearSearch</div>;
}

export default LinearSearch;
