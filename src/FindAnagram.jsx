import React from "react";

function FindAnagram() {
  const String1 = "listen";
  const String2 = "silent";

  function anagram(str1, str2) {
    const word1 = str1.toLowerCase();
    const word2 = str2.toLowerCase();
    if (word1.length !== word2.length) return;
    const obj1 = {};
    const obj2 = {};
    for (let char of word1) {
      obj1[char] = (obj1[char] || 0) + 1;
    }
    console.log(obj1);

    for (let char of word2) {
      obj2[char] = (obj2[char] || 0) + 1;
    }
    console.log(obj2);

    for (let char of word1) {
      if (obj1[char] !== obj2[char]) {
        return false;
      }
    }

    return true;
  }
  console.log(anagram(String1, String2));

  const word1 = "faizan";
  const word2 = "naizaf";

  function checkanagram(word1, word2) {
    if (word1.length !== word2.length) return false;

    // const string1 = word1.split("");
    // const string2 = word2.split("");
    // console.log(string1, string2);

    // for (let char of string1) {
    //   if (!string2.includes(char)) {
    //     return false;
    //   }
    // }
    // return true;

    const obj1 = {};
    const obj2 = {};

    for (let char of word1) {
      obj1[char] = (obj1[char] || 0) + 1;
    }
    console.log(obj1);
    for (let char of word2) {
      obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let char of word1) {
      if (obj1[char] !== obj2[char]) {
        return false;
      }
    }
    return true;
  }
  console.log(checkanagram(word1, word2));
  return <div>FindAnagram</div>;
}

export default FindAnagram;
