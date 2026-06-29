// import React from "react";

// function CheckArrySorted() {
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   function checksorted(arry) {
//     for (let i = 0; i < arry.length - 1; i++) {
//       if (arry[i] > arry[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let result = checksorted(array);
//   console.log(result);

//   return <div>CheckArrySorted</div>;
// }

// export default CheckArrySorted;

import React from "react";

function CheckArrySorted() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function checksort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  let result = checksort(array);
  console.log(result);

  const freq = "aabbssccll";

  function checkfreq(word) {
    let result = {};
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }
  checkfreq(freq);

  function chcksort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
      return true;
    }
  }
  const final = chcksort(array);
  console.log(final);
  return <div>CheckArrySorted</div>;
}

export default CheckArrySorted;
