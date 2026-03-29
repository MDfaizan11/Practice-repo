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

    const remove = result.filter(
      (char, index) => result.indexOf(char) === index,
    );
    console.log(remove);
  }
  CountVowel(myNameOne);
  function findPalim(myName) {
    const word = myName.toLowerCase();
    console.log(word);
    let res = [];
    for (let i = word.length - 1; i >= 0; i--) {
      res.push(word[i]);
    }
    console.log(res.join(""));
    let result = word === res.join("");
    console.log(result);
  }
  findPalim(myName);

  // console.log(res.join(""));
  // let result = res === myName ? true : false;
  // console.log(result);
  return <div>Palindrom</div>;
}

export default Palindrom;
