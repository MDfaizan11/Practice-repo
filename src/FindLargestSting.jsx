// import React from "react";

// function FindLargestSting() {
//   let myName = "mohammed faizan";
//   let num = myName.split(" ");
//   console.log(num);

//   const largeString = num.reduce((prev, curr) => {
//     return curr.length > prev.length ? curr : prev;
//   });
//   console.log(largeString);

//   const smallString = num.reduce((prev, curr) => {
//     return curr.length < prev.length ? curr : prev;
//   });
//   console.log(smallString);

//   let largestSting = "";
//   for (let large of num) {
//     if (large.length > largestSting.length) {
//       largestSting = large;
//     }
//   }
//   console.log(largestSting);

//   let smallestString = num[0];
//   for (let small of num) {
//     if (small.length < smallestString.length) {
//       smallestString = small;
//     }
//   }
//   console.log(smallestString);

//   function ReverseName(word) {
//     console.log(word);
//     // let result = word.reverse().join(" ");
//     // console.log(result);
//     let result = word.map((item, index) => {
//       return item.split("").reverse().join(" ");
//     });
//     console.log(result.join(" , "));
//   }
//   ReverseName(num);
//   return <div>FindLargestSting</div>;
// }

// export default FindLargestSting;

import React from "react";

function FindLargestSting() {
  let myname = "mohammed faizaan";
  let newName = myname.toLowerCase().split(" ");
  console.log(newName);

  const result = newName.reduce((prev, curr) => {
    if (curr.length > prev.length) {
      return curr;
    } else {
      return prev;
    }
  });
  console.log(result);

  let largestString = "";

  for (let large of newName) {
    if (large.length > largestString.length) {
      largestString = large;
    }
  }
  console.log(largestString);

  let smallestString = newName[0];
  for (let small of newName) {
    if (small < smallestString) {
      smallestString = small;
    }
  }
  console.log(smallestString);

  const name = "mohammed shabaz";
  let num = name.split(" ");
  let largestString2 = "";

  for (let large of num) {
    if (large.length > largestString2.length) {
      largestString2 = large;
    }
  }
  console.log(largestString2);

  function fingLarge(word) {
    let large = word[0];
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > large.length) {
        large = word[i];
      }
    }
    console.log(large)
  }
  fingLarge(num);
  return <div>FindLargestSting</div>;
}

export default FindLargestSting;
