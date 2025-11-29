import React from "react";

function CapitalWord() {
  const MyName = "faizan khan";
  function capitalWords(word) {
    const words = word.split(" ");
    console.log(words);
    const result = words.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    console.log(result.join(" "));
  }
  capitalWords(MyName);

  const fun = "nun";

  function check(newWord) {
    const string = newWord.toLowerCase();
    console.log(string);
    const result = string.split("").reverse().join("");
    console.log(result === string);
  }
  check(fun);
  return <div>CapitalWord</div>;
}

export default CapitalWord;
