import React from "react";

function RemoveDub() {
  const number = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];

  //   const result = [...new Set(number)];

  //   const result = number.filter((item, index) => number.indexOf(item) === index);

  // find even and odd number
  const result1 = number.filter((item) => item % 2 !== 0);
  console.log(result1);

  const arrayNumber = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];
  const result = arrayNumber.filter((num) => num % 2 !== 0);
  // .map((num) => num * num);
  console.log(result);

  function removedub(num) {
    const result = num.filter((item, index) => num.indexOf(item) === index);
    console.log(result);
  }
  removedub(arrayNumber);

  const arrayNumberr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];

  function removedubb(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    console.log(result);
    return result;
  }
  removedubb(arrayNumberr);

  return <div>RemoveDub</div>;
}

export default RemoveDub;
