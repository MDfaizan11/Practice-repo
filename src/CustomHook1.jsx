import React from "react";
import CustomHook1Data from "./CustomHook1Data";
import ReactPaginate from "react-paginate";
function CustomHook1() {
  const { userData, loading, error } = CustomHook1Data(
    "https://jsonplaceholder.typicode.com/comments",
  );

  return (
    <div>
      CustomHook1
      <ul>
        {userData.length > 0
          ? userData.map((user) => {
              return (
                <div key={user.id}>
                  <li>{user.name}</li>
                </div>
              );
            })
          : "no user Found"}
      </ul>
      <ReactPaginate />
    </div>
  );
}

export default CustomHook1;
