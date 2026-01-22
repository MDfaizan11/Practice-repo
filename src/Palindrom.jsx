import React from "react";

function Palindrom() {
  const myName = "mum";
  function checkPalindrom(word) {
    const NewWord = word.toLowerCase();
    console.log(NewWord);
    const result = NewWord.split("").reverse().join("");
    console.log(result);
    console.log(NewWord === result);
  }
  checkPalindrom(myName);

  const myNameOne = "mohammed faizan";
  const vowels = ["a", "e", "i", "o", "u"];
  function CountVowel(word) {
    const String = word.toLowerCase().split("");
    console.log(String);

    const result = String.filter((char) => vowels.includes(char));
    console.log(result);
  }
  CountVowel(myNameOne);
  return <div>Palindrom</div>;
}

export default Palindrom;
