import React from "react";

function findMissingChar() {
  const str = "abdef";

  function findMissingChar(str) {
    for (let i = 0; i < str.length - 1; i++) {
      const current = str.charCodeAt(i);
      const next = str.charCodeAt(i + 1);

      if (next - current > 1) {
        return String.fromCharCode(current + 1);
      }
    }
  }

  console.log(findMissingChar(str)); // c

  const str1 = "abdef";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const char of alphabet) {
    if (!str1.includes(char)) {
      console.log(char);
    }
  }
  return <div>findMissingChar</div>;
}

export default findMissingChar;
