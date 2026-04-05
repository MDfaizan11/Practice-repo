// import React from "react";

// function CapitalWord() {
//   const myName = "mohammed faizan";

//   function FirstLetterCapital(num) {
//     const word = num.split(" ");
//     console.log(word);
//     const result = word.map((item) => {
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     });
//     console.log(result.join(" "));
//   }
//   FirstLetterCapital(myName);
//   return <div>CapitalWord</div>;
// }

// export default CapitalWord;

import React from "react";

function CapitalWord() {
  let myname = "mohammed faizan";
  function capitalWord(num) {
    let newName = num.split(" ");
    console.log(newName);
    let result = newName.map((item, index) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(result.join(" "));
  }
  capitalWord(myname);
  return <div>CapitalWord</div>;
}

export default CapitalWord;
