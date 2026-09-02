import React from "react";

function FindCommonElement() {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [8, 9, 10, 3, 4, 5];

  function findCommon(arr1, arr2) {
    const result = [];

    for (let char of arr1) {
      if (arr2.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  findCommon(arr1, arr2);

  const string1 = "developer";
  const string2 = "programmer";
  function findCommon1(str1, str2) {
    // const obj1 = {};
    // const obj2 = {};
    // const result = [];
    // for (let char of str1) {
    //   obj1[char] = (obj1[char] || 0) + 1;
    // }
    // console.log(obj1);
    // for (let char of str2) {
    //   obj2[char] = (obj2[char] || 0) + 1;
    // }
    // console.log(obj2);

    // for (let char of str1) {
    //   if (obj2[char] && !result.includes(char)) {
    //     result.push(char);
    //   }
    // }

    // console.log(result);

    const result = [];
    const word1 = str1.split("");
    const word2 = str2.split("");

    for (let char of word1) {
      if (word2.includes(char) && !result.includes(char)) {
        result.push(char);
      }
    }
    console.log(result);
  }
  findCommon1(string1, string2);
  return <div>FindCommonElement</div>;
}

export default FindCommonElement;
