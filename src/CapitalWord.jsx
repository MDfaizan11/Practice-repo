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
  const myname = "mohammed faizan";

  function CapitalFirstWord(word) {
    const newName = word.split(" ");
    console.log(newName);
    const result = newName.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(result.join(" "));
  }
  CapitalFirstWord(myname);
  return <div>CapitalWord</div>;
}

export default CapitalWord;
