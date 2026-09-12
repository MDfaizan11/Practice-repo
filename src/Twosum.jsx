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

  const arr1 = [1, 2, 3, 4, 5, 6];
  const target1 = 11;
  function findSumTwo(arr, target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          result.push(i, j);
        }
      }
    }
    console.log(result);
    return result;
  }
  findSumTwo(arr1, target1);
  return <div>Twosum</div>;
}

export default Twosum;
