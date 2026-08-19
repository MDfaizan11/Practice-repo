import React from "react";

function MergeTwoArray() {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray);

  function Merge(arr1, arr2) {
    const result = [];
    for (let num of arr1) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    console.log(result);

    for (let num2 of arr2) {
      if (!result.includes(num2)) {
        result.push(num2);
      }
    }
    console.log(result);
  }
  Merge(arr1, arr2);

  function mergeTwo(arr1, arr2) {
    let index = 0;
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      result[index] = arr1[i];
      index++;
    }
    for (let i = 0; i < arr2.length; i++) {
      result[index] = arr2[i];
      index++;
    }

    console.log(result);
  }
  mergeTwo(arr1, arr2);

  const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr4 = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  function mergeArry(arr3, arr4) {
    const result = [];
    // for (let i = 0; i < arr3.length; i++) {
    //   result.push(arr3[i]);
    // }
    // for (let i = 0; i < arr4.length; i++) {
    //   result.push(arr4[i]);
    // }

    for (let num of arr3) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    for (let num of arr4) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    console.log(result);
  }
  mergeArry(arr3, arr4);

  return <div>MergeTwoArray</div>;
}

export default MergeTwoArray;
