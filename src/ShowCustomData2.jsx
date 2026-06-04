import React from "react";
import CustomHook2 from "./CustomHook2";
function ShowCustomData2() {
  const { userData, loading, error } = CustomHook2(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(userData);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <p>ShowCustomData2</p>
      <ul>
        {userData.length > 0 ? (
          userData.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </>
  );
}

export default ShowCustomData2;
