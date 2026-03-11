// import React from "react";

// function CountWovel() {
//   const myName = "mohammed faizan";
//   const wovel = ["m", "h", "i"];
//   const filterData = myName.toLowerCase().split("");
//   console.log(filterData);
//   const result = filterData.filter((item, index) => wovel.includes(item));
//   console.log(result.length);
//   return <div>CountWovel</div>;
// }

// export default CountWovel;

import React from "react";

function CountWovel() {
  const myname = "mohammed faizan";
  const Wovel = ["m", "a", "z"];
  const newWord = myname.toLowerCase().split("");
  console.log(newWord);
  const result = newWord.filter((item, index) => Wovel.includes(item));
  console.log(result);
  // const remove = [...new Set(result)];
  // console.log(remove.length);

  const removedublicate = result.filter(
    (item, index) => result.indexOf(item) === index,
  );
  console.log(removedublicate.length);
  return <div>CountWovel</div>;
}

export default CountWovel;
