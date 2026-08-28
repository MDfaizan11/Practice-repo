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

  const word = "mohammed faizan";

  function reverse2(word) {
    const newWord = word.split("");
    const result = [];
    for (let i = newWord.length - 1; i >= 0; i--) {
      result.push(newWord[i]);
    }

    console.log(result.join(""));
  }
  reverse2(word);

  let myName1 = "mohammed faizan";
  function reverseCharctor(word) {
    let newName = word.toLowerCase().split(" ");
    console.log(newName);
    const result = newName.map((word) => {
      return word.split("").reverse().join("");
    });
    console.log(result.join( ));
  }
  reverseCharctor(myName1);
  return <div>ReverseString</div>;
}

export default ReverseString;
