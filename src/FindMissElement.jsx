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

  const arrayLength = array.length + 1;
  const expectedSum = (arrayLength * (arrayLength + 1)) / 2;
  const originalArraySum = array.reduce((prev, acc) => prev + acc);
  const missedNumber = expectedSum - originalArraySum;
  console.log(missedNumber);
  return <div>FindMissElement</div>;
}

export default FindMissElement;
