// // // import React from "react";

// // // function CountWovel() {
// // //   const myname = "mohammed faizan";
// // //   let wovel = ["m", "d", "f"];

// // //   const result = myname.split("").filter((item, index) => {
// // //     return wovel.includes(item);
// // //   });
// // //   console.log(result.length);
// // //   const removeDubWovel = result.filter(
// // //     (item, index) => result.indexOf(item) === index,
// // //   );
// // //   console.log(removeDubWovel);

// // //   function removedub(word) {
// // //     console.log(word);
// // //     let result2 = [];

// // //     for (let dub of word) {
// // //       if (!result2.includes(dub)) {
// // //         result2.push(dub);
// // //       }
// // //     }
// // //     console.log(result2);
// // //   }
// // //   removedub(result);
// // //   return <div>CountWovel</div>;
// // // }

// // // export default CountWovel;

// // import React from "react";

// // function CountWovel() {
// //   let myName = "mohammed faizan";
// //   let Wovel = ["m", "a", "e", "z"];

// //   const result = myName
// //     .toLowerCase("")
// //     .split("")
// //     .filter((item, index) => Wovel.includes(item));
// //   console.log(result.length);

// //   // let removeDub = result.filter(
// //   //   (item, index) => result.indexOf(item) === index,
// //   // );
// //   // console.log(removeDub);

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
//   let myname = "mohammed faizan";
//   let wovel = ["m", "i", "z"];
//   let num = myname.split("");
//   console.log(num);
//   const result = num.filter((item, index) => wovel.includes(item));
//   console.log(result);

//   let finalresult = result.filter(
//     (item, index) => result.indexOf(item) === index,
//   );
//   console.log(finalresult);

//   function removedub(word) {
//     let result = [];
//     for (let char of word) {
//       if (!result.includes(char)) {
//         result.push(char);
//       }
//     }
//     console.log(result);
//   }
//   removedub(result);

//   return <div>CountWovel</div>;
// }

// export default CountWovel;

import React from "react";

function CountWovel() {
  const myName = "mohammed faizan";
  const Wovel = ["m", "a", "z"];

  // function functionWovel(word) {
  //   let newWord = word.split("");
  //   console.log(newWord);
  //   let count = 0;
  //   for (let char of word) {
  //     if (Wovel.includes(char)) {
  //       count++;
  //       console.log(count);
  //     }
  //   }
  // }
  // functionWovel(myName);

  const name = myName.split("");
  const myWovel = name.filter((item) => Wovel.includes(item));
  console.log(myWovel.length);

  const removeDub = myWovel.filter(
    (item, index) => myWovel.indexOf(item) === index,
  );
  console.log(removeDub);

  function removeDubcount(word) {
    let result = [];
    for (let char of word) {
      if (!result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  removeDubcount(myWovel);
  return <div>CountWovel</div>;
}

export default CountWovel;
