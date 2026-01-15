import React from "react";

function FindLargestSting() {
  const myName = "mohammed faizannnnnnnnn";
  function findLarge(name) {
    const num = name.split(" ");
    console.log(num);
    let largest = "";
    for (let word of num) {
      if (word.length > largest.length) {
        largest = word;
      }
    }
    console.log(largest);
  }
  findLarge(myName);

  const strings = ["apple", "banana", "watermelon", "kiwi"];

  let largest = "";

  for (let str of strings) {
    if (str.length > largest.length) {
      largest = str;
    }
  }

  console.log(largest); // watermelon
  const stringss = ["apple", "banana", "watermelon", "kiwi"];

  const largestt = stringss.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );

  console.log(largestt); // watermelon
  return <div>FindLargestSting</div>;
}

export default FindLargestSting;
