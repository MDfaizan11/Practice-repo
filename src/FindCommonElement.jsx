import React from "react";

function FindCommonElement() {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [3, 4, 5];

  function findCommon(arr1, arr2) {
    const result = [];

    for (let char of arr1) {
      if (arr2.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  findCommon(arr1, arr2);
  return <div>FindCommonElement</div>;
}

export default FindCommonElement;
