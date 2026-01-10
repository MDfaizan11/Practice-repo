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

  function findMissNumber(arr) {
    console.log(arr);
    const num = arr.length + 1;
    console.log(num);
    const sum = (num * (num + 1)) / 2;
    console.log(sum);
    const arryLength = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(arryLength);
    const result = sum - arryLength;
    console.log(result);
  }
  findMissNumber(array);

  const arrayr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const result = arrayr.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    } else {
      return acc;
    }
  });
  console.log(result);

  const secoundArray = [1, 30, 20, 110, 60, 40, 50, 70, 80, 90, 100];
  const firstLargeNumber = secoundArray.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  });
  console.log(firstLargeNumber);
  return <div>FindMissElement</div>;
}

export default FindMissElement;
