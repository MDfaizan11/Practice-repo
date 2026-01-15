import React from "react";

function CountWovel() {
  const myName = "mohammed faizan";
  const vowels = ["a", "e", "i", "o", "u"];
  function countVowels(name) {
    const nameInLowerCase = name.toLowerCase();
    console.log(nameInLowerCase);
    const nameArray = nameInLowerCase.split("");
    console.log(nameArray);
    const result = nameArray.filter((char) => vowels.includes(char));
    console.log(result.length);
  }
  countVowels(myName);
  

  return <div>CountWovel</div>;
}

export default CountWovel;
