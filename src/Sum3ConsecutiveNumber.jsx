import React from "react";

function Sum3ConsecutiveNumber() {
  // "3 consecutive numbers" just means 3 numbers in a row, like:4, 5, 6
  const nums = [1, 2, 3, 4, 5, 6];
  function sumOfThreeConsecutiveNumbers(arr) {
    const result = [];
    for (let i = 0; i <= nums.length - 3; i++) {
      const sum = nums[i] + nums[i + 1] + nums[i + 2];
      result.push(sum);
    }
    return result;
  }
  const sums = sumOfThreeConsecutiveNumbers(nums);
  console.log(sums);

  const arr = [1, 2, 3, 4, 5, 6];
  function findSum(arr) {
    const result = [];
    for (let i = 0; i <= arr.length - 2; i++) {
      const sum = arr[i] + arr[i + 1];
      result.push(sum);
    }
    console.log(result);
    return result;
  }
  findSum(arr);
  return <div>Sum3ConsecutiveNumber</div>;
}

export default Sum3ConsecutiveNumber;
