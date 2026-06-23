import React from "react";

function CheckArrySorted() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function checkarray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const result = checkarray(array);
  console.log(result);
  return <div>CheckArrySorted</div>;
}

export default CheckArrySorted;
