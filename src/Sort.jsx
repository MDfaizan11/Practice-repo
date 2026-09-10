import React from "react";

function Sort() {
  const arr = [1, 3, 5, 6, 7, 9, 8, 2];
  const result = arr.sort((a, b) => a - b); // assending sort
  console.log(result);
  const arr1 = [1, 3, 5, 6, 7, 9, 8, 2];
  const arr1Result = arr1.sort((a, b) => b - a);
  console.log(arr1Result);

  //   bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);

  return <div>Sort</div>;
}

export default Sort;
