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
  return <div>FindAnagram</div>;
}

export default FindAnagram;
