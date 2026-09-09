import React from "react";

function Twosum() {
  const arr = [1, 2, 3, 4, 5];
  const target = 5;

  function CalculateTwoSum(arr, taget) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === taget) {
          return console.log(i, j);
        }
      }
      console.log(result);
    }
  }
  CalculateTwoSum(arr, target);

  return <div>Twosum</div>;
}

export default Twosum;
