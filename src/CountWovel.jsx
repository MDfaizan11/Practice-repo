// import React from "react";

// function CountWovel() {
//   const myname = "mohammed faizan";
//   let wovel = ["m", "d", "f"];

//   const result = myname.split("").filter((item, index) => {
//     return wovel.includes(item);
//   });
//   console.log(result.length);
//   const removeDubWovel = result.filter(
//     (item, index) => result.indexOf(item) === index,
//   );
//   console.log(removeDubWovel);

//   function removedub(word) {
//     console.log(word);
//     let result2 = [];

//     for (let dub of word) {
//       if (!result2.includes(dub)) {
//         result2.push(dub);
//       }
//     }
//     console.log(result2);
//   }
//   removedub(result);
//   return <div>CountWovel</div>;
// }

// export default CountWovel;

import React from "react";

function CountWovel() {
  let myName = "mohammed faizan";
  let Wovel = ["m", "a", "e", "z"];

  const result = myName
    .toLowerCase("")
    .split("")
    .filter((item, index) => Wovel.includes(item));
  console.log(result.length);

  // let removeDub = result.filter(
  //   (item, index) => result.indexOf(item) === index,
  // );
  // console.log(removeDub);

  function removedub(word) {
    let result = [];
    for (let char of word) {
      if (!result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  removedub(result);
  return <div>CountWovel</div>;
}

export default CountWovel;
