import React from "react";

function FlattenArray() {
  const array = [1, [2, [3, 4], 5], [6, 7]];

  function SingleArray(arry) {
    const result = [];
    for (let arr of array) {
      if (Array.isArray(arr)) {
        SingleArray(arr);
      } else {
        result.push(arr);
      }
    }
    console.log(result);
  }
  SingleArray(array);
  return <div>FlattenArray</div>;
}

export default FlattenArray;
