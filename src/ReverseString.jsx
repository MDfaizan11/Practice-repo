//
import React from "react";

function ReverseString() {
  let Myname = "mohammed faizan";
  let newWord = Myname.split(" ");
  const result = Myname.split(" ").reverse().join(" ");
  console.log(result);

  function reverse(word) {
    let NewWord = word.split("");
    console.log(NewWord);
    const result = [];
    for (let i = NewWord.length - 1; i >= 0; i--) {
      result.push(NewWord[i]);
    }
    console.log(result.join(" "));
  }
  reverse(Myname);

  const finalresult = newWord.map((item) => {
    return item.split("").reverse().join("");
  });
  console.log(finalresult.join(" "));
  return <div>ReverseString</div>;
}

export default ReverseString;
