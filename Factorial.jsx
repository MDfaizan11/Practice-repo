import React from "react";

function Factorial() {
  function factorial(n) {
    if (n < 0) {
      console.log("nagetive number not allowed");
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  console.log(factorial(5));

  function findFactorial(num) {
    if (num < 0) {
      return "negitive num not allowed";
    }
    if (num === 0 || num === 1) {
      return 1;
    }

    return num * findFactorial(num - 1);
  }
  const result = findFactorial(6);
  console.log(result);
  return <div>Factorial</div>;
}

export default Factorial;
