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

 
  return <div>CompairTwoString</div>;
}

export default CompairTwoString;
