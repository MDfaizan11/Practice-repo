// // // import React from "react";

// // // function CountFrequancy() {
// // //   function Count(word) {
// // //     console.log(word);
// // //     let result = {};

// // //     for (let char of word) {
// // //       result[char] = (result[char] || 0) + 1;
// // //     }
// // //     console.log(result);
// // //     return result;
// // //   }
// // //   Count("aassccmmm");
// // //   return <div>CountFrequancy</div>;
// // // }

// // // export default CountFrequancy;

// // import React from "react";

// // function CountFrequancy() {
// //   function count(word) {
// //     let result = {};
// //     for (let char of word) {
// //       result[char] = (result[char] || 0) + 1;
// //     }
// //     console.log(result);
// //   }

// //   count("1122336669999");
// //   return <div>CountFrequancy</div>;
// // }

// // export default CountFrequancy;

// import React from "react";

// function CountFrequancy() {
//   let word = "aaavvvvbbbrrrrssss";
//   function countNumer() {
//     let result = {};
//     for (let car of word) {
//       result[car] = (result[car] || 0) + 1;
//     }
//     console.log(result);
//     return result;
//   }
//   countNumer();
//   return <div>CountFrequancy</div>;
// }

// export default CountFrequancy;

import React from "react";

function CountFrequancy() {
  let myName = "mohammed faizan";

  function countFrequency(word) {
    let result = {};
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
    return result;
  }
  countFrequency(myName);

  function numberFrequancy(num) {
    let result = {};
    for (let number of num) {
      result[number] = (result[number] || 0) + 1;
    }
    console.log(result);
    return result;
  }
  numberFrequancy("112256225446633");
  return <div>CountFrequancy</div>;
}

export default CountFrequancy;
