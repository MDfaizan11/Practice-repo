import React from "react";

function FindLongestSubString() {
  let name = "abcabcabc";
  function findLong(name) {
    let result = "";
    let longest = "";
    // When a duplicate is found, we remove characters from the left until the duplicate is gone.
    for (let char of name) {
      while (result.includes(char)) {
        result = result.slice(1);
      }
      result += char;
      if (result.length > longest.length) {
        longest = result;
      }
    }
    console.log(longest);
  }

  findLong(name);

  function findSubstring(word) {
    let longest = "";
    let result = "";
    for (let char of word) {
      while (result.includes(char)) {
        result = result.slice(1);
      }
      result += char;

      if (result.length > longest.length) {
        longest = result;
      }
    }
    console.log(longest);
  }
  findSubstring(name);

  return <div>FindLongestSubString</div>;
}

export default FindLongestSubString;
