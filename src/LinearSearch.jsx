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

  const array2 = [10, 20, 40, 60, 90];
  const target2 = 90;

  function SearchLinear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target2) {
        return i;
      }
    }
    return -1;
  }
  const result2 = SearchLinear(array2, target2);
  console.log(result2);

  const array3 = [10, 20, 40, 60, 90];
  let target3 = 90;
  function CheckLiner(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  const result3 = CheckLiner(array3, target3);
  console.log(result3);
  return <div>LinearSearch</div>;
}

export default LinearSearch;
