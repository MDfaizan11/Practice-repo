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
  return <div>Factorial</div>;
}

export default Factorial;
