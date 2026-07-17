// // // // import React from "react";

// // // // function CountFrequancy() {
// // // //   function Count(word) {
// // // //     console.log(word);
// // // //     let result = {};

// // // //     for (let char of word) {
// // // //       result[char] = (result[char] || 0) + 1;
// // // //     }
// // // //     console.log(result);
// // // //     return result;
// // // //   }
// // // //   Count("aassccmmm");
// // // //   return <div>CountFrequancy</div>;
// // // // }

// // // // export default CountFrequancy;

// // // import React from "react";

// // // function CountFrequancy() {
// // //   function count(word) {
// // //     let result = {};
// // //     for (let char of word) {
// // //       result[char] = (result[char] || 0) + 1;
// // //     }
// // //     console.log(result);
// // //   }

// // //   count("1122336669999");
// // //   return <div>CountFrequancy</div>;
// // // }

// // // export default CountFrequancy;

// // import React from "react";

// // function CountFrequancy() {
// //   let word = "aaavvvvbbbrrrrssss";
// //   function countNumer() {
// //     let result = {};
// //     for (let car of word) {
// //       result[car] = (result[car] || 0) + 1;
// //     }
// //     console.log(result);
// //     return result;
// //   }
// //   countNumer();
// //   return <div>CountFrequancy</div>;
// // }

// // export default CountFrequancy;

// import React from "react";

// function CountFrequancy() {
//   let myName = "mohammed faizan";

//   function countFrequency(word) {
//     let result = {};
//     for (let char of word) {
//       result[char] = (result[char] || 0) + 1;
//     }
//     console.log(result);
//     return result;
//   }
//   countFrequency(myName);

//   function numberFrequancy(num) {
//     let result = {};
//     for (let number of num) {
//       result[number] = (result[number] || 0) + 1;
//     }
//     console.log(result);
//     return result;
//   }
//   numberFrequancy("112256225446633");
//   return <div>CountFrequancy</div>;
// }

// export default CountFrequancy;

import React from "react";

function CountFrequancy() {
  const name = "aabbcccdddkkk";

  function check(num) {
    let result = {};
    for (let char of num) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }
  check(name);

  const number = "11225569745633";

  function numberFrequncy(num) {
    const result = {};
    for (let char of num) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }
  numberFrequncy(number);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function checksort(num) {
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] > num[i + 1]) {
        return false;
      }
    }
    return true;
  }
  const result = checksort(array);
  console.log(result);

  let myname = "mohammed";
  function checkfrequancy(num) {
    let result = {};
    for (let char of num) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }
  checkfrequancy(myname);

  let bigname = "mohammedshabaz";

  function Frequancy(name) {
    const result = {};
    for (let char of name) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);
  }
  Frequancy(bigname);

  const bigName = "aabbccop";

  function checkNew(word) {
    const result = {};
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    for (let num of word) {
      if (result[num] === 1) {
        console.log(num);
        return num;
      }
    }
    console.log(result);
  }
  checkNew(bigName);

  function secoundNon(word) {
    const result = {};
    let count = 0;

    for (let chr of word) {
      result[chr] = (result[chr] || 0) + 1;
    }
    console.log(result);

    for (let secound of word) {
      if (result[secound] === 1) {
        count++;
        if (count === 2) {
          console.log(secound);
          return secound;
        }
      }
    }
  }
  secoundNon(bigName);

  const NewWord = "aabbcced";

  function fre(word) {
    const result = {};
    let count = 0;
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);

    // for (let first of word) {
    //   if (result[first] === 1) {
    //     console.log(first);
    //     return first;
    //   }
    // }

    for (let firstWord of word) {
      if (result[firstWord] === 1) {
        count++;
        if (count === 2) {
          console.log(firstWord);
          return firstWord;
        }
      }
    }
  }
  fre(NewWord);

  const name3 = "aabbccddep";
  function fre2(word) {
    const result = {};
    let count = 0;
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);

    for (let num of word) {
      if (result[num] === 1) {
        count++;
        if (count === 2) {
          console.log(num);
        }
      }
    }
  }
  fre2(name3);
  return <div>CountFrequancy</div>;
}

export default CountFrequancy;
