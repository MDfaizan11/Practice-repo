import React from "react";

function PrimeNumber() {
  // even number means dived by 2
  //   odd number means not dived by 2
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddnum = nums.filter((num) => num % 2 === 0);

  const primenum = nums.filter((num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });

  console.log(primenum);
  return <div>PrimeNumber</div>;
}

export default PrimeNumber;
