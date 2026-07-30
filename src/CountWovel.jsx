// // // // import React from "react";

// // // // function CountWovel() {
// // // //   const myname = "mohammed faizan";
// // // //   let wovel = ["m", "d", "f"];

// // // //   const result = myname.split("").filter((item, index) => {
// // // //     return wovel.includes(item);
// // // //   });
// // // //   console.log(result.length);
// // // //   const removeDubWovel = result.filter(
// // // //     (item, index) => result.indexOf(item) === index,
// // // //   );
// // // //   console.log(removeDubWovel);

// // // //   function removedub(word) {
// // // //     console.log(word);
// // // //     let result2 = [];

// // // //     for (let dub of word) {
// // // //       if (!result2.includes(dub)) {
// // // //         result2.push(dub);
// // // //       }
// // // //     }
// // // //     console.log(result2);
// // // //   }
// // // //   removedub(result);
// // // //   return <div>CountWovel</div>;
// // // // }

// // // // export default CountWovel;

// // // import React from "react";

// // // function CountWovel() {
// // //   let myName = "mohammed faizan";
// // //   let Wovel = ["m", "a", "e", "z"];

// // //   const result = myName
// // //     .toLowerCase("")
// // //     .split("")
// // //     .filter((item, index) => Wovel.includes(item));
// // //   console.log(result.length);

// // //   // let removeDub = result.filter(
// // //   //   (item, index) => result.indexOf(item) === index,
// // //   // );
// // //   // console.log(removeDub);

// // //   function removedub(word) {
// // //     let result = [];
// // //     for (let char of word) {
// // //       if (!result.includes(char)) {
// // //         result.push(char);
// // //       }
// // //     }
// // //     console.log(result);
// // //   }
// // //   removedub(result);
// // //   return <div>CountWovel</div>;
// // // }

// // // export default CountWovel;

// // import React from "react";

// // function CountWovel() {
// //   let myname = "mohammed faizan";
// //   let wovel = ["m", "i", "z"];
// //   let num = myname.split("");
// //   console.log(num);
// //   const result = num.filter((item, index) => wovel.includes(item));
// //   console.log(result);

// //   let finalresult = result.filter(
// //     (item, index) => result.indexOf(item) === index,
// //   );
// //   console.log(finalresult);

// //   function removedub(word) {
// //     let result = [];
// //     for (let char of word) {
// //       if (!result.includes(char)) {
// //         result.push(char);
// //       }
// //     }
// //     console.log(result);
// //   }
// //   removedub(result);

// //   return <div>CountWovel</div>;
// // }

// // export default CountWovel;

// import React from "react";

// function CountWovel() {
//   const myName = "mohammed faizan";
//   const Wovel = ["m", "a", "z"];

//   // function functionWovel(word) {
//   //   let newWord = word.split("");
//   //   console.log(newWord);
//   //   let count = 0;
//   //   for (let char of word) {
//   //     if (Wovel.includes(char)) {
//   //       count++;
//   //       console.log(count);
//   //     }
//   //   }
//   // }
//   // functionWovel(myName);

//   const name = myName.split("");
//   const myWovel = name.filter((item) => Wovel.includes(item));
//   console.log(myWovel.length);

//   const removeDub = myWovel.filter(
//     (item, index) => myWovel.indexOf(item) === index,
//   );
//   console.log(removeDub);

//   function removeDubcount(word) {
//     let result = [];
//     for (let char of word) {
//       if (!result.includes(char)) {
//         result.push(char);
//       }
//     }
//     console.log(result);
//   }
//   removeDubcount(myWovel);
//   return <div>CountWovel</div>;
// }

// export default CountWovel;

import React from "react";

export default function CountWovel() {
  let name = "mohammed faizan";
  let Vowel = ["m", "n", "a"];
  let myName = name.split("");
  console.log(myName);

  let result = myName.filter((item, index) => Vowel.includes(item));
  console.log(result.length);

  const removedub = result.filter(
    (item, index) => result.indexOf(item) === index,
  );
  console.log(removedub);

  function reome(word) {
    let result = [];
    for (let char of word) {
      if (!result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  reome(result);

  const string = "mohammed";
  let Vowels = ["m", "o", "e", "d"];

  const result2 = string.split("").filter((item, index) => {
    return Vowels.includes(item);
  });
  console.log(result2);

  function dub(word) {
    const Dubresult = [];
    for (let char of word) {
      if (!Dubresult.includes(char)) {
        Dubresult.push(char);
      }
    }
    console.log(Dubresult);
  }
  dub(result2);

  const removeDublicate = result2.filter(
    (item, index) => result2.indexOf(item) === index,
  );
  console.log(removeDublicate);

  let imran = "mohamed";
  let imranVowel = ["m", "o", "d"];

  function findImran(word) {
    let count = 0;
    for (let char of word) {
      if (imranVowel.includes(char)) {
        count++;
        // console.log(count);
      }
    }
    console.log(count);
    return count;
  }
  findImran(imran);

  const num = "shabaz";
  let vol = ["s", "h", "a"];
  const numResult = num.split("").filter((item) => vol.includes(item));
  console.log(numResult);
  const numResult2 = numResult.filter(
    (item, index) => numResult.indexOf(item) === index,
  );
  console.log(numResult2);

  function volByLoop(word) {
    const newWord = word.split("");
    let result = [];
    for (let char of newWord) {
      if (vol.includes(char) && !result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  volByLoop(num);

  const string1 = "faizan";
  const Vowel1 = ["f", "z", "i", "a"];

  const result4 = string1
    .split("")
    .filter((item, index) => Vowel1.includes(item));
  console.log(result4.join("").length);

  function CountWovel1(word) {
    const result = [];
    const newWord = word.split("");
    for (let char of newWord) {
      if (Vowel1.includes(char) && !result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result.length);
  }
  CountWovel1(string1);
  return <div>CountWovel</div>;
}
