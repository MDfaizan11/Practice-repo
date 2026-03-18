// import React from "react";

// function FindMissElement() {
//   const array = [1, 2, 3, 4, 6, 7, 8, 9];

//   function findMissNumber(arr) {
//     console.log(arr);
//     const num = arr.length + 1;
//     console.log(num);
//     const sum = (num * (num + 1)) / 2;
//     console.log(sum);
//     const arryLength = arr.reduce((acc, curr) => acc + curr, 0);
//     console.log(arryLength);
//     const result = sum - arryLength;
//     console.log(result);
//   }
//   findMissNumber(array);

//   const arrayr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const result = arrayr.reduce((acc, curr) => {
//     if (curr > acc) {
//       return curr;
//     } else {
//       return acc;
//     }
//   });
//   console.log(result);

//   const secoundArray = [1, 30, 20, 110, 60, 40, 50, 70, 80, 90, 100];
//   const firstLargeNumber = secoundArray.reduce((acc, curr) => {
//     return curr > acc ? curr : acc;
//   });
//   console.log(firstLargeNumber);
//   return <div>FindMissElement</div>;
// }

// export default FindMissElement;

import React from "react";

function FindMissElement() {
  const array = [1, 2, 3, 4, 6, 7, 8, 9];
  function findmiss(num) {
    const n = num.length + 1;

    const ExpectedSum = (n * (n + 1)) / 2;
    console.log(ExpectedSum);
    const arraySum = num.reduce((acc, curr) => curr + acc);
    console.log(arraySum);
    const result = ExpectedSum - arraySum;
    console.log(result);
  }
  findmiss(array);

  const fingLargestNumber = array.reduce((prev, curr) => {
    if (curr > prev) {
      return curr;
    } else {
      return prev;
    }
  });
  console.log(fingLargestNumber);

  let smallNumber = array[0];
  for (let large of array) {
    if (large < smallNumber) {
      smallNumber = large;
    }
  }
  console.log(smallNumber);

  let largenum = array[0];
  for (let large of array) {
    if (large > largenum) {
      largenum = large;
    }
  }
  console.log(largenum);

  // flatarray

  let arrnum = [1, [2, 3, [4, 5]]];
  let resultflatarray = arrnum.flat(Infinity);
  console.log(resultflatarray);

  function flatArry(num) {
    console.log(num);
    let result = [];
    for (let array of num) {
      if (Array.isArray(array)) {
        result.push(...flatArry(array));
      } else {
        result.push(array);
      }
    }
    console.log(result);
    return result;
  }
  flatArry(arrnum);
  let dubarray = [1, 1, 2, 2, 3, 3, 4, 5, 6, 9];
  const result = dubarray.filter(
    (item, index) => dubarray.indexOf(item) === index,
  );
  console.log(result);

  function removeDub(drray) {
    const result = [];
    for (let arry of drray) {
      if (!result.includes(arry)) {
        result.push(arry);
      }
    }
    console.log(result);
    return result;
  }
  removeDub(dubarray);

  let myName = "mohammed faizannnn";
  let num = myName.split(" ");
  const numresult = num.reduce((curr, acc) => {
    return acc.length > curr.length ? acc : curr;
  });
  console.log(numresult);

  let largestString = "";
  for (let large of num) {
    if (large.length > largestString.length) {
      largestString = large;
    }
    console.log(largestString);
  }

  let smallestString = num[0];
  for (let small of num) {
    if (small.length < smallestString.length) {
      smallestString = small;
    }
    console.log(smallestString);
  }
  return <div>FindMissElement</div>;
}

export default FindMissElement;
