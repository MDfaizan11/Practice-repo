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

  const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function find2(num) {
    const result = [];
    for (let i = 0; i < num.length - 3; i++) {
      const sum = num[i] + num[i + 1] + num[i + 2];
      result.push(sum);
    }
    console.log(result);
  }
  find2(nums1);
  return <div>Sum3ConsecutiveNumber</div>;
}

export default Sum3ConsecutiveNumber;
