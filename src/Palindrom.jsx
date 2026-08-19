// import React from "react";

// function Palindrom() {
//   const myName = "mum";
//   function checkPalindrom(word) {
//     const NewWord = word.toLowerCase();
//     console.log(NewWord);
//     const result = NewWord.split("").reverse().join("");
//     console.log(result);
//     console.log(NewWord === result);
//   }
//   checkPalindrom(myName);

//   const myNameOne = "mohammed faizan";
//   const vowels = ["a", "e", "i", "o", "u"];
//   function CountVowel(word) {
//     const String = word.toLowerCase().split("");
//     console.log(String);

//     const result = String.filter((char) => vowels.includes(char));
//     console.log(result);

//     const remove = result.filter(
//       (char, index) => result.indexOf(char) === index,
//     );
//     console.log(remove);
//   }
//   CountVowel(myNameOne);
//   function findPalim(myName) {
//     const word = myName.toLowerCase();
//     console.log(word);
//     let res = [];
//     for (let i = word.length - 1; i >= 0; i--) {
//       res.push(word[i]);
//     }
//     console.log(res.join(""));
//     let result = word === res.join("");
//     console.log(result);
//   }
//   findPalim(myName);

//   // console.log(res.join(""));
//   // let result = res === myName ? true : false;
//   // console.log(result);
//   return <div>Palindrom</div>;
// }

// export default Palindrom;

import React from "react";

function Palindrom() {
  const name = "mum";
  function checkPalindrom(word) {
    let newname = word.toLowerCase();
    console.log(newname);
    const reverseWord = word.split("").reverse().join("");
    console.log(reverseWord);
    const result = reverseWord === newname ? true : false;
    console.log(result);
  }
  checkPalindrom(name);

  function chekbyLoop(word) {
    const newName = word.toLowerCase();
    console.log(newName);
    let result = [];
    for (let i = newName.length - 1; i >= 0; i--) {
      result.push(newName[i]);
    }
    console.log(result.join(""));
    const finalResult = newName === result.join("");
    console.log(finalResult);
    return result;
  }
  chekbyLoop(name);

  const Myname = "madam";
  function palindromByLoop(word) {
    const name = word.toLowerCase();
    const result = [];
    for (let i = word.length - 1; i >= 0; i--) {
      result.push(word[i]);
    }
    console.log(result.join(""));
    const finalResult = name === result.join("");
    console.log(finalResult);
  }
  palindromByLoop(Myname);

  const num = "mum";
  function findPalindrom(num) {
    const newNum = num.toLowerCase();
    const result = [];
    for (let i = num.length - 1; i >= 0; i--) {
      result.push(num[i]);
    }

    const finalResult = newNum === result.join("");
    console.log(finalResult);
  }
  findPalindrom(num);

  const word1 = "ABCCBA";
  function findPalim(word) {
    const newWord1 = word.toLowerCase();
    const result = [];
    for (let i = newWord1.length - 1; i >= 0; i--) {
      result.push(newWord1[i]);
    }
    console.log(result);
    const final = newWord1 === result.join("");
    console.log(final);
    return result;
  }
  findPalim(word1);
  return <div>Palindrom</div>;
}

export default Palindrom;
