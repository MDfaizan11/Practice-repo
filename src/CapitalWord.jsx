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
  const name = "mohammed shabaz";
  function LetterCapital(word) {
    const newWord = word.split(" ");
    console.log(newWord);

    const result = newWord.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(result.join(" "));
  }
  LetterCapital(name);
  return <div>CapitalWord</div>;
}

export default CapitalWord;
