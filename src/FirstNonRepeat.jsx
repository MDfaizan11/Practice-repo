import React from "react";

function FirstNonRepeat() {
  function firstNonRepeat(str) {
    const charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
      if (charCount[char] === 2) {
        console.log(char);
        return char;
      }
    }
  }
  firstNonRepeat("faizan khan");

  function secondNonRepeated(str) {
    const map = {};

    // Step 1: count frequency
    for (let char of str) {
      map[char] = (map[char] || 0) + 1;
    }

    // Step 2: collect non-repeating characters in order
    const nonRepeating = [];

    for (let char of str) {
      if (map[char] === 1) {
        nonRepeating.push(char);
      }
    }

    // Step 3: return second one
    return nonRepeating[1] || null;
  }

  console.log(secondNonRepeated("I love coding"));

  const myName = "aabbcceddf";

  function FirstNonRepeat(word) {
    const result = {};
    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    console.log(result);

    for (let first of word) {
      if (result[first] === 1) {
        console.log(first);
        return first;
      }
    }
  }
  FirstNonRepeat(myName);

  const myName2 = "aabbcceddf";

  function secondNonRepeat(word) {
    const result = {};
    let count = 0;

    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }

    for (let char of word) {
      if (result[char] === 1) {
        count++;

        if (count === 2) {
          console.log(char);
          return char;
        }
      }
    }
    return null;
  }

  console.log(secondNonRepeat(myName2));

  let word1 = "aabbccsd";
  function firstNon(word) {
    const result = {};

    for (let char of word) {
      result[char] = (result[char] || 0) + 1;
    }
    for (let newWord of word) {
      if (result[newWord] > 1) {
        console.log(newWord);
      }
    }
    console.log(result);
  }
  firstNon(word1);
  return <div>FirstNonRepeat</div>;
}

export default FirstNonRepeat;
