// // import React from "react";

// // function FIndLargeNumber() {
// //   const array = [1, 2, 3, 4, 6, 7, 8, 9];
// //   const sum = array.reduce((prev, curr) => curr + prev);
// //   console.log(sum);
// //   const fingLargestNumber = array.reduce((prev, curr) => {
// //     if (curr > prev) {
// //       return curr;
// //     } else {
// //       return prev;
// //     }
// //   });
// //   console.log(fingLargestNumber);

// //   let LargestNumber = array[0];
// //   for (let large of array) {
// //     if (large > LargestNumber) {
// //       LargestNumber = large;
// //     }
// //   }
// //   console.log(LargestNumber);

// //   let smallestNumber = array[0];
// //   for (let small of array) {
// //     if (small < smallestNumber) {
// //       smallestNumber = small;
// //     }
// //   }
// //   console.log(smallestNumber);

// //   const result = Math.min(...array);
// //   console.log(result);
// //   return <div>FIndLargeNumber</div>;
// // }

// // export default FIndLargeNumber;

// import React from "react";

// function FIndLargeNumber() {
//   let array = [1, 2, 3, 4, 6, 7, 8, 9];
//   const result = array.reduce((prev, curr) => {
//     return curr > prev ? curr : prev;
//   });
//   console.log(result);

//   let largestNumber = array[0];
//   for (let large of array) {
//     if (large > largestNumber) {
//       largestNumber = large;
//     }
//   }
//   console.log(largestNumber);
//   let smallestnum = array[0];
//   for (let small of array) {
//     if (small < smallestnum) {
//       smallestnum = small;
//     }
//   }
//   console.log(smallestnum);
//   const big = Math.max(...array);
//   console.log(big);

//   let findMAx = array[0];
//   for (let large of array) {
//     if (large > findMAx) {
//       findMAx = large;
//     }
//   }
//   console.log(findMAx);

//   return <div>FIndLargeNumber</div>;
// }

// export default FIndLargeNumber;

import React from "react";

function FIndLargeNumber() {
  const number = [1, 2, 3, 5, 6, 9, 7, 8, 85];

  let largest = number[0];
  for (let large of number) {
    if (large > largest) {
      largest = large;
    }
  }
  console.log(largest);

  let largestestNumer = number[0];
  for (let large of number) {
    if (large > largestestNumer) {
      largestestNumer = large;
    }
  }
  console.log(largestestNumer);

  let smallestNumber = number[0];
  for (let small of number) {
    if (small < smallestNumber) {
      smallestNumber = small;
    }
  }
  console.log(smallestNumber);

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let lar = num[0];
  for (let large of num) {
    if (large > lar) {
      lar = large;
    }
  }
  console.log(lar);

  const Number1 = [1, 2, 3, 4, 5, 6];
  let large = Number1[0];
  for (let long of Number1) {
    if (long > large) {
      large = long;
    }
  }
  console.log(large);

  let small = Number1[0];
  for (let smallest of Number1) {
    if (smallest < small) {
      small = smallest;
    }
  }
  console.log(small);

  const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let largestnum = num1[0];
  let secoundLarge = num1[0];
  for (let largee of num1) {
    if (largee > largestnum) {
      secoundLarge = largestnum;
      largestnum = largee;
    } else if (secoundLarge > largee) {
      secoundLarge = largee;
    }
  }
  console.log(largestnum);
  console.log(secoundLarge);

  let smallestnum = num1[0];
  let secoundSmallestnum = Infinity;

  for (let small of num1) {
    if (small < smallestnum) {
      secoundSmallestnum = smallestnum;
      smallestnum = small;
    } else if (small < secoundSmallestnum && small !== smallestnum) {
      secoundSmallestnum = small;
    }
  }

  console.log("Smallest:", smallestnum);
  console.log("Second smallest:", secoundSmallestnum);

  const luckey = [1, 1, 2, 3];
  function findLuckey(number) {
    const result = {};

    for (let num of number) {
      result[num] = (result[num] || 0) + 1;
    }
    console.log(result);
    for (let luck of number) {
      if (result[luck] === 2) {
        console.log(luck);
      }
    }
  }
  findLuckey(luckey);

  const arr1 = [8, 5, 7, 9, 6, 3];
  let largestEle = arr1[0];
  let SecoundLargestELe = Infinity;
  function findlargestArr1(arr) {
    for (let large of arr) {
      if (large > largestEle) {
        SecoundLargestELe = largestEle;
        largestEle = large;
      } else if (large > SecoundLargestELe) {
        SecoundLargestELe = large;
      }
    }
  }
  findlargestArr1(arr1);
  console.log(largestEle);
  console.log(SecoundLargestELe);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

  let largnum = nums[0];
  for (let num of nums) {
    if (num > largnum) {
      largnum = num;
    }
  }
  console.log(largnum);

  return <div>FIndLargeNumber</div>;
}

export default FIndLargeNumber;
