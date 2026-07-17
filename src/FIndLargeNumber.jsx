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
  return <div>FIndLargeNumber</div>;
}

export default FIndLargeNumber;
