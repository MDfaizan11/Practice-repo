// import React from "react";

// function FIndLargeNumber() {
//   const array = [1, 2, 3, 4, 6, 7, 8, 9];
//   const sum = array.reduce((prev, curr) => curr + prev);
//   console.log(sum);
//   const fingLargestNumber = array.reduce((prev, curr) => {
//     if (curr > prev) {
//       return curr;
//     } else {
//       return prev;
//     }
//   });
//   console.log(fingLargestNumber);

//   let LargestNumber = array[0];
//   for (let large of array) {
//     if (large > LargestNumber) {
//       LargestNumber = large;
//     }
//   }
//   console.log(LargestNumber);

//   let smallestNumber = array[0];
//   for (let small of array) {
//     if (small < smallestNumber) {
//       smallestNumber = small;
//     }
//   }
//   console.log(smallestNumber);

//   const result = Math.min(...array);
//   console.log(result);
//   return <div>FIndLargeNumber</div>;
// }

// export default FIndLargeNumber;

import React from "react";

function FIndLargeNumber() {
  let array = [1, 2, 3, 4, 6, 7, 8, 9];
  const result = array.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  });
  console.log(result);

  let largestNumber = array[0];
  for (let large of array) {
    if (large > largestNumber) {
      largestNumber = large;
    }
  }
  console.log(largestNumber);
  let smallestnum = array[0];
  for (let small of array) {
    if (small < smallestnum) {
      smallestnum = small;
    }
  }
  console.log(smallestnum);
  const big = Math.max(...array);
  console.log(big);

  return <div>FIndLargeNumber</div>;
}

export default FIndLargeNumber;
