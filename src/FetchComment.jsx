import React from "react";
import CustomHook from "./CustomHook";
function FetchComment() {
  const {
    Loading,
    UserData: UserComment,
    error,
  } = CustomHook("https://jsonplaceholder.typicode.com/comments");
  console.log(UserComment);
  return (
    <div>
      FetchComment
      {Loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong</p>
      ) : UserComment.length > 0 ? (
        UserComment.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          );
        })
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default FetchComment;
