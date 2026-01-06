// import React from "react";

// function FindMissElement() {
//   const arry = [1, 2, 3, 4, 6, 7, 8, 9];
//   function findMissingElement(arr) {
//     const n = arr.length + 1;
//     const totalSum = (n * (n + 1)) / 2;
//     const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
//     return totalSum - arrSum;
//   }
//   const missingElement = findMissingElement(arry);
//   console.log("Missing Element:", missingElement);
//   return <div>FindMissElement</div>;
// }

// export default FindMissElement;
import React from "react";

function FindMissElement() {
  const array = [1, 2, 3, 4, 6, 7, 8, 9];
  function FindMissElement(arr) {
    const n = arr.length + 1;
    console.log(n);
    const sum = (n * (n + 1)) / 2;
    console.log(sum);
    const arrsum = arr.reduce((acc, curr) => acc + curr, 0);
    const result = sum - arrsum;
    console.log(result);
  }
  FindMissElement(array);
  return <div>FindMissElement</div>;
}

export default FindMissElement;
