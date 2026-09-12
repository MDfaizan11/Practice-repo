import React from "react";

function ValidParenthesis() {
  function isValid(str) {
    const stack = [];
    const pairs = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (const char of str) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log(isValid("()[]{}"));

  return <div>ValidParenthesis</div>;
}

export default ValidParenthesis;
