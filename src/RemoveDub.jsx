// import React from "react";

// function RemoveDub() {
//   const number = [0, 0, false, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];

//   //   const result = [...new Set(number)];

//   //   const result = number.filter((item, index) => number.indexOf(item) === index);

//   // find even and odd number
//   const result1 = number.filter((item) => item % 2 !== 0);
//   console.log(result1);

//   const arrayNumber = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];
//   const result = arrayNumber.filter((num) => num % 2 !== 0);
//   // .map((num) => num * num);
//   console.log(result);

//   function removedub(num) {
//     const result = num.filter((item, index) => num.indexOf(item) === index);
//     console.log(result);
//   }
//   removedub(arrayNumber);

//   const arrayNumberr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];

//   function removedubb(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//     console.log(result);
//     return result;
//   }

//   removedubb(arrayNumberr);

//   const removefalse = number.filter(
//     (item, index) => item !== 0 && item !== false,
//   );
//   console.log(removefalse);

//   return <div>RemoveDub</div>;
// }

// export default RemoveDub;

import React from "react";

function RemoveDub() {
  const array = [1, 2, 3, 4, 5, 5, 6, 9, 7, 8, 8];
  const result = [...new Set(array)];
  console.log(result);

  const result2 = array.filter((item, index) => array.indexOf(item) === index);
  console.log(result2);

  function removeDub(num) {
    let result = [];
    for (let array of num) {
      if (!result.includes(array)) {
        result.push(array);
      }
    }
    console.log(result);
    return result;
  }
  removeDub(array);

  let largestNum = array[0];
  for (let large of array) {
    if (large > largestNum) {
      largestNum = large;
    }
  }
  console.log(largestNum);
  let smallestnum = array[0];
  for (let small of array) {
    if (small < smallestnum) {
      smallestnum = small;
    }
  }
  console.log(smallestnum);

  function findDuplicates(arr) {
    let count = {};
    let duplicates = [];

    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
      if (count[num] === 2) {
        duplicates.push(num);
      }
    }

    return duplicates;
  }

  console.log(findDuplicates(array));

  function doubleRemove(arr) {
    const result = [];
    for (let num of arr) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    console.log(result);
  }
  doubleRemove(array);
  return <div>RemoveDub</div>;
}

export default RemoveDub;
