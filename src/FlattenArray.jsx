import React from "react";

function FlattenArray() {
  const array = [1, [2, [3, 4], 5], [6, 7]];

  function singlearray(arr) {
    const result = [];
    for (let merge of arr) {
      if (Array.isArray(merge)) {
        result.push(...singlearray(merge));
      } else {
        result.push(merge);
      }
    }
    console.log(result);
    return result;
  }
  singlearray(array);

  const arr1 = [1, [2, 3, [4, 5]]];

  function flatrray(arr) {
    const result = [];

    for (let merge of arr) {
      if (Array.isArray(merge)) {
        result.push(...flatrray(merge));
      } else {
        result.push(merge);
      }
    }
    console.log(result);
    return result;
  }
  flatrray(arr1);

  return <div>FlattenArray</div>;
}

export default FlattenArray;
