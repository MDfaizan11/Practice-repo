// // import React from "react";

// // function ZeroLast() {
// //   const array = [1, 2, 3, 0, 4, 8, 0, 9, 0];

// //   function zero(num) {
// //     let NonZero = [];
// //     let zero = [];
// //     for (let i = 0; i < num.length; i++) {
// //       if (num[i] === 0) {
// //         zero.push(num[i]);
// //       } else {
// //         NonZero.push(num[i]);
// //       }
// //     }
// //     console.log(NonZero, zero);
// //     const result = [...NonZero, ...zero];
// //     console.log(result);
// //   }
// //   zero(array);

// //   function moveZeros2(arr) {
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] !== 0) {
// //         result.push(arr[i]);
// //       }
// //     }
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] === 0) {
// //         result.push(arr[i]);
// //       }
// //     }
// //     console.log(result);
// //     return result;
// //   }
// //   moveZeros2(array);
// //   return <div>ZeroLast</div>;
// // }

// // export default ZeroLast;

// import React from "react";

// function ZeroLast() {
//   const array = [1, 2, 3, 0, 4, 8, 0, 9, 0];

//   function Zero(num) {
//     let nonZero = [];
//     let zero = [];

//     for (let i = 0; i < num.length; i++) {
//       if (num[i] !== 0) {
//         nonZero.push(num[i]);
//       } else {
//         zero.push(num[i]);
//       }
//     }
//     console.log([...nonZero, ...zero]);
//   }
//   Zero(array);

//   function Zero2(num) {
//     const result = [];
//     for (let i = 0; i < num.length; i++) {
//       if (num[i] !== 0) {
//         result.push(num[i]);
//       }
//     }
//     for (let i = 0; i < num.length; i++) {
//       if (num[i] === 0) {
//         result.push(num[i]);
//       }
//     }

//     console.log(result);
//   }
//   Zero2(array);
//   return <div>ZeroLast</div>;
// }

// export default ZeroLast;

import React from "react";

function ZeroLast() {
  const array = [1, 2, 3, 0, 4, 8, 0, 9, 0];

  function lastZero(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  }
  lastZero(array);

  function lastZero2(arr) {
    const nonZero = [];
    const Zero = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZero.push(arr[i]);
      } else {
        Zero.push(arr[i]);
      }
    }

    console.log([...nonZero, ...Zero]);
  }
  lastZero2(array);

  const arr1 = [1, 2, 3, 0, 4, 8, 0, 9, 0];

  function lastZero3(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        result.push(arr[i]);
      }
    }

    console.log(result);
  }

  lastZero3(arr1);

  const arr2 = [1, 0, 2, 3, 4, 0, 5, 6, 0, 7];
  function lastZero4(num) {
    const result = [];

    for (let i = 0; i < num.length; i++) {
      if (num[i] !== 0) {
        result.push(num[i]);
      }
    }

    for (let i = 0; i < num.length; i++) {
      if (num[i] === 0) {
        result.push(num[i]);
      }
    }

    console.log(result);
  }
  lastZero4(arr2);
  return <div>ZeroLast</div>;
}

export default ZeroLast;
