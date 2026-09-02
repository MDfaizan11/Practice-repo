import React from "react";

function Factorial() {
  function findFactorial(num) {
    if (num < 0) {
      console.log("negative num not allowed");
    }
    if (num === 0 || num === 1) {
      return 1;
    }

    return num * findFactorial(num - 1);
  }
  const result = findFactorial(8);
  console.log(result);

  function findFactorial1(num) {
    if (num < 0) {
      console.log("negetive  num not allowed");
    }
    if (num === 0 || num === 1) {
      return 1;
    }

    return num * findFactorial1(num - 1);
  }
  console.log(findFactorial1(6));
  return <div>Factorial</div>;
}

export default Factorial;
