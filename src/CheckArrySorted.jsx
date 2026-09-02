// // import React from "react";

// // function CheckArrySorted() {
// //   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //   function checksorted(arry) {
// //     for (let i = 0; i < arry.length - 1; i++) {
// //       if (arry[i] > arry[i + 1]) {
// //         return false;
// //       }
// //     }
// //     return true;
// //   }
// //   let result = checksorted(array);
// //   console.log(result);

// //   return <div>CheckArrySorted</div>;
// // }

// // export default CheckArrySorted;

// import React from "react";

// function CheckArrySorted() {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   function checksort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let result = checksort(array);
//   console.log(result);

//   const freq = "aabbssccll";

//   function checkfreq(word) {
//     let result = {};
//     for (let char of word) {
//       result[char] = (result[char] || 0) + 1;
//     }
//     console.log(result);
//   }
//   checkfreq(freq);

//   function chcksort(arr) {
//     for (let i = 0; i < arr.length -1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//       return true;
//     }
//   }
//   const final = chcksort(array);
//   console.log(final);
//   return <div>CheckArrySorted</div>;
// }

// export default CheckArrySorted;

import React from "react";

function CheckArrySorted() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function checkarraySorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const result = checkarraySorted(array);
  console.log(result);

  const name = "mohammed";
  function checkFrequacy(num) {
    let result = {};
    for (let char of num) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }

  checkFrequacy(name);

  const newarr = [1, 2, 3, 4, 5, 6, 7, 10];

  function checkArry(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const final = checkArry(newarr);
  console.log(final);

  const arraydata = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function checkdata(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > data[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const finaldata = checkdata(arraydata);
  console.log(finaldata);

  const arr = [1, 2, 3, 4, 5, 85, 7, 8, 9];
  function check(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  const answer = check(arr);
  console.log(answer);

  let number = [1, 2, 3, 4, 5, 6];

  function ch(number) {
    for (let i = 0; i < number.length; i++) {
      if (number[i] > number[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const r = ch(number);
  console.log(r);

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const ans = sort(arr1);
  console.log(ans);

  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function checkArry1(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const result1 = checkArry1(arr2);
  console.log(result1);

  const arr3 = [1, 2, 3, 4, 5];
  const arr4 = [9, 6, 8, 7];
  const result2 = [...arr3, ...arr4].sort((a, b) => a - b);
  console.log(result2);

  const arr5 = [1, 2, 3, 4, 5, 6];

  function arrcheck(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(arrcheck(arr5));

  const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function check2(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(check2(arr6));
  return <div>CheckArrySorted</div>;
}
export default CheckArrySorted;
