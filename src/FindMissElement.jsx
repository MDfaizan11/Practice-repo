// // function FindMissElement() {
// //   const number = [1, 2, 3, 5, 6, 7, 8, 9];
// //   function findMiss(number) {
// //     const totalLength = number.length + 1;
// //     console.log(totalLength);
// //     const expectedSum = (totalLength * (totalLength + 1)) / 2;
// //     console.log(expectedSum);
// //     const arraysum = number.reduce((prev, curr) => curr + prev, 0);
// //     console.log(arraysum);
// //     const result = expectedSum - arraysum;
// //     console.log(result);
// //   }
// //   findMiss(number);
// //   let arrnum = [1, [2, 3, [4, 5]]];
// //   const flatenarray = arrnum.flat(Infinity);
// //   console.log(flatenarray);

// //   function FlatenByLoop(num) {
// //     let result = [];
// //     for (let array of num) {
// //       if (Array.isArray(array)) {
// //         result.push(...FlatenByLoop(array));
// //       } else {
// //         result.push(array);
// //       }
// //     }
// //     console.log(result);
// //     return result;
// //   }
// //   FlatenByLoop(arrnum);
// //   return <div>FindMissElement</div>;
// // }

// // export default FindMissElement;

// import React from "react";

// function FindMissElement() {
//   let array = [1, 2, 4, 5, 6, 7,8, 9];
//   function findMiss(num) {
//     let arrayLenght = num.length + 1;
//     console.log(arrayLenght);
//     let expectesum = (arrayLenght * (arrayLenght + 1)) / 2;
//     console.log(expectesum);

//     let arraySum = num.reduce((prev, curr) => curr + prev, 0);
//     console.log(arraySum);
//     let result = expectesum - arraySum;
//     console.log(result);
//   }
//   findMiss(array);

//   function twomiss(num) {
//     let max = Math.max(...num);
//     let result = [];
//     for (let i = 1; i <= max; i++) {
//       if (!num.includes(i)) {
//         result.push(i);
//       }
//     }

//     console.log(result);
//   }
//   twomiss(array);
//   return <div>FindMissElement</div>;
// }

// export default FindMissElement;

import React from "react";

function FindMissElement() {
  const array = [1, 2, 4, 5, 6, 7, 8, 9];
  const array2 = [1, 2, 4, 5, 6, 7, 9];

  const arrayLength = array.length + 1;
  const expectedSum = (arrayLength * (arrayLength + 1)) / 2;
  const originalArraySum = array.reduce((prev, acc) => prev + acc);
  const missedNumber = expectedSum - originalArraySum;
  console.log(missedNumber);

  function findMisstwo(arr) {
    const set = new Set(arr);
    console.log(set);
    let result = [];
    for (let i = 1; i <= arr.length + 2; i++) {
      if (!set.has(i)) {
        result.push(i);
      }
    }
    console.log(result);
  }
  findMisstwo(array2);

  const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

  const NewArrayLength = newNumber.length + 1;
  const AccepectedLength = (NewArrayLength * (NewArrayLength + 1)) / 2;
  const actualLength = newNumber.reduce((prev, curr) => curr + prev, 0);
  const result = AccepectedLength - actualLength;
  console.log(result);

  function findTwoMissNumber(num) {
    const max = Math.max(...num);
    const result = [];
    for (let i = 1; i <= max; i++) {
      if (!num.includes(i)) {
        result.push(i);
      }
    }
    console.log(result);
  }

  findTwoMissNumber(newNumber);

  const findTwo = [1, 3, 5, 6, 7, 9];

  function twoFind(arr) {
    const maxValue = Math.max(...arr);
    const result = [];

    for (let i = 1; i <= maxValue; i++) {
      if (!arr.includes(i)) {
        result.push(i);
      }
    }
    console.log(result);
  }
  twoFind(findTwo);

  const num = [1, 2, 3, 4, 5, 7, 9];

  // const inCreaseLength = num.length + 1;
  // const expectedSum2 = (inCreaseLength * (inCreaseLength + 1)) / 2;
  // const accutalSum2 = num.reduce((prev, curr) => curr + prev, 0);
  // const missNum = expectedSum2 - accutalSum2;
  // console.log(missNum);

  function twoMissNumber(num) {
    const maxNum = Math.max(...num);
    const result = [];

    for (let i = 1; i <= maxNum; i++) {
      if (!num.includes(i)) {
        result.push(i);
      }
    }

    console.log(result);
  }
  twoMissNumber(num);

  const num1 = [1, 2, 3, 4, 5, 6, 9];
  let expectedLength = num1.length + 1;
  const expectedSum1 = (expectedLength * (expectedLength + 1)) / 2;
  const actualSum = num1.reduce((prev, curr) => curr + prev);
  const result1 = expectedSum1 - actualSum;
  console.log(result1);

  function TwoMiss(arr) {
    const maxinumLength = Math.max(...arr);
    const result = [];
    for (let i = 1; i <= maxinumLength; i++) {
      if (!arr.includes(i)) {
        result.push(i);
      }
    }
    console.log(result);
  }
  TwoMiss(num1);

  const nums = [1, 2, 4, 5, 6, 7, 8, 9];

  const actLength = nums.length + 1;
  console.log(actLength);
  const ExpecLength = (actLength * (actLength + 1)) / 2;
  console.log(ExpecLength);
  const numsLength = nums.reduce((prev, curr) => curr + prev, 0);
  console.log(numsLength);
  const missNum = ExpecLength - numsLength;
  console.log(missNum);

  const nums2 = [4, 3, 2, 7, 8, 2, 3, 1];
  function findDissapperNum(num) {
    let maxnum = Math.max(...num);
    const missnums = [];
    for (let i = 1; i <= maxnum; i++) {
      if (!num.includes(i)) {
        missnums.push(i);
      }
    }

    console.log(missnums);
  }
  findDissapperNum(nums2);
  return <div>FindMissElement</div>;
}

export default FindMissElement;
