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

  const arr2 = [1, [2, 3, [4, 5]]];
  function flat(arr) {
    const result = [];
    for (let num of arr) {
      if (Array.isArray(num)) {
        result.push(...flat(num));
      } else {
        result.push(num);
      }
    }
    console.log(result);
    return result;
  }
  flat(arr2);

  const arr3 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
  function flatArry(arr) {
    const result = [];
    for (let char of arr) {
      if (Array.isArray(char)) {
        result.push(...flatArry(char));
      } else {
        result.push(char);
      }
    }
    console.log(result);

    return result;
  }
  flatArry(arr3);
  return <div>FlattenArray</div>;
}

export default FlattenArray;
