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
  return <div>FirstNonRepeat</div>;
}

export default FirstNonRepeat;
