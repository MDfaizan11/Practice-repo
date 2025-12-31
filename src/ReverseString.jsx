import React from "react";

function ReverseString() {
  const Myname = "faizan khan";
  //   const revserse = Myname.split(" ").reverse().join(" ");
  //   console.log(revserse);  ans == khan faizan

  //   function reverseString(num) {
  //     const result = [];
  //     for (let i = num.length - 1; i >= 0; i--) {
  //       result.push(num[i]);
  //     }
  //     const finalResult = result.join("");
  //     console.log(finalResult);
  //   }
  //   reverseString(Myname);

  function reversedata(num) {
    const mynum = num.split(" ");
    console.log(mynum);
    const result = mynum.map((item) => {
      return item.split("").reverse().join("");
    });
    console.log(result.join(" "));
  }
  reversedata(Myname);
  return <div>ReverseString</div>;
}

export default ReverseString;
