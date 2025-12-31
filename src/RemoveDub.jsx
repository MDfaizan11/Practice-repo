import React from "react";

function RemoveDub() {
  const number = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9];

  //   const result = [...new Set(number)];

  //   const result = number.filter((item, index) => number.indexOf(item) === index);

  // find even and odd number
  const result = number.filter((item) => item % 2 !== 0);
  console.log(result);


  
  return <div>RemoveDub</div>;
}

export default RemoveDub;
