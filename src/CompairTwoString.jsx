import React from "react";

function CompairTwoString() {
  const str1 = "ABCD";
  const str2 = "CDBA";

  function compair(st1, st2) {
    const word1 = st1.toLowerCase();
    const word2 = st2.toLowerCase();
    if (word1.length !== word2.length) return false;

    const count1 = {};
    const count2 = {};

    for (let ch of word1) {
      count1[ch] = (count1[ch] || 0) + 1;
    }

    for (let ch of word2) {
      count2[ch] = (count2[ch] || 0) + 1;
    }

    for (let key in count1) {
      if (count1[key] !== count2[key]) {
        return false;
      }
    }

    return true;
  }

  console.log(compair(str1, str2));

  let str3 = "mohammed";
  let str4 = "mohammed";

  function checkString(str3, str4) {
    if (str3.length !== str4.length) {
      return console.log(false);
    }
    let count3 = {};
    let count4 = {};

    for (let char of str3) {
      count3[char] = (count3[char] || 0) + 1;
    }
    console.log(count3);

    for (let char of str4) {
      count4[char] = (count4[char] || 0) + 1;
    }

    console.log(count4);

    for (let key in count3) {
      if (count3[key] !== count4[key]) {
        return false;
      }
    }

    return true;
  }
  console.log(checkString(str3, str4));

  let str5 = "shabaz";
  let str6 = "faizan";

  function stringCheck(str5, str6) {
    let word1 = str5.toLowerCase();
    let word2 = str6.toLowerCase();
    let count1 = {};
    let count2 = {};
    if (word1.length !== word2.length) {
      console.log(false);
    }

    for (let chr of word1) {
      count1[chr] = (count1[chr] || 0) + 1;
    }

    console.log(count1);
    for (let chr2 of word2) {
      count2[chr2] = (count2[chr2] || 0) + 1;
    }
    console.log(count2);

    for (let key of word1) {
      if (count1[key] !== count2[key]) {
        return false;
      }
    }
    return true;
  }
  console.log(stringCheck(str5, str6));


  
  return <div>CompairTwoString</div>;
}

export default CompairTwoString;
