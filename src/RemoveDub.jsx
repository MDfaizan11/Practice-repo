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

import { duration } from "@mui/material";
import React from "react";

function RemoveDub() {
  const array = [1, 2, 3, 4, 5, 5, 6, 9, 7, 8, 8];
  const result = [...new Set(array)];
  console.log(result);

  const result2 = array.filter((item, index) => array.indexOf(item) !== index);
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

  const numberDub = [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9];

  const dubresult = numberDub.filter(
    (item, index) => numberDub.indexOf(item) === index,
  );
  console.log(dubresult);

  function FindDub(number) {
    const result = [];

    for (let dub of number) {
      if (!result.includes(dub)) {
        result.push(dub);
      }
    }
    console.log(result);
  }
  FindDub(numberDub);

  function findTwoDub(num) {
    const count = {};
    const Dublicates = [];

    for (let dub of num) {
      count[dub] = (count[dub] || 0) + 1;
      if (count[dub] === 2) {
        Dublicates.push(dub);
      }
    }

    console.log(Dublicates);
  }
  findTwoDub(numberDub);

  const DunlicateWord = "aabcdef";
  function removeDublicateString(word) {
    const result = [];
    const result2 = {};
    const newWord = word.split("");
    for (let dub of newWord) {
      if (!result.includes(dub)) {
        result.push(dub);
      }
    }
    console.log(result.join(""));

    for (let char of newWord) {
      result2[char] = (result2[char] || 0) + 1;
    }
    console.log(result2);

    for (let dub of newWord) {
      if (result2[dub] === 2) {
        console.log(dub);
        return;
      }
    }
  }
  removeDublicateString(DunlicateWord);

  const arr1 = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

  function removed(arr) {
    const result = {};
    const dublicate = [];
    for (let num of arr) {
      result[num] = (result[num] || 0) + 1;
    }
    console.log(result);
    for (let dub of arr) {
      if (result[dub] > 1) {
        console.log(dub);
        dublicate.push(dub);
      }
    }
    console.log(dublicate);
    return { result, dublicate };
  }
  removed(arr1);

  const arr2 = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

  function findDub(arr) {
    const Dublicates = [];
    const frequency = {};

    for (let char of arr) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    console.log(frequency);
    for (let char of arr) {
      if (frequency[char] > 1 && !Dublicates.includes(char)) {
        Dublicates.push(char);
      }
    }

    console.log(Dublicates);
  }
  findDub(arr2);
  return <div>RemoveDub</div>;
}

export default RemoveDub;
