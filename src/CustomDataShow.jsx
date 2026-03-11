import React from "react";
import CustomHook from "./CustomHook";
function CustomDataShow() {
  const { Loading, UserData, error } = CustomHook(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(UserData);

  if (Loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <p>CustomDataShow</p>
      {UserData.length > 0
        ? UserData.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
              </div>
            );
          })
        : "no data found"}
    </>
  );
}

export default CustomDataShow;
