import React from "react";

function CountWovel() {
  const myName = "mohammed faizan";
  const wovel = ["m", "h", "i"];
  const filterData = myName.toLowerCase().split("");
  console.log(filterData);
  const result = filterData.filter((item, index) => wovel.includes(item));
  console.log(result.length);
  return <div>CountWovel</div>;
}

export default CountWovel;
