import React, { useCallback, useEffect, useState } from "react";

function Todo() {
  const [AddTodo, setAddTodo] = useState("");
  const [getData, setGetData] = useState([]);
  const [refreshKey, setrefreshKey] = useState(0);

  useEffect(() => {
    const getAllTodo = JSON.parse(localStorage.getItem("todo")) || [];
    console.log(getAllTodo);
    setGetData(getAllTodo);
  }, [refreshKey]);

  const handleSubmitTodo = useCallback(
    (e) => {
      e.preventDefault();

      if (AddTodo.trim().length === 0) {
        return alert("Enter Something");
      }

      const obj = {
        TodoName: AddTodo,
        complete: false,
      };

      const updateTodo = [...getData, obj];
      localStorage.setItem("todo", JSON.stringify(updateTodo));
      setAddTodo("");
      setGetData(updateTodo);
      alert("Todo Added Successfully");
      setrefreshKey(refreshKey + 1);
    },
    [AddTodo]
  );

  function handleComplete(index) {
    const updatedTodos = getData.map((item, i) => {
      if (i === index) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });

    setGetData(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  }

  return (
    <>
      <p>todo</p>

      <form onSubmit={handleSubmitTodo}>
        <input
          type="text"
          value={AddTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {getData.length > 0
        ? getData.map((item, index) => {
            return (
              <div style={{ display: "flex" }} key={index}>
                <input
                  type="checkbox"
                  value={item.complete}
                  onChange={() => handleComplete(index)}
                />
                <ul>
                  <li
                    style={{
                      listStyleType: "none",
                      textDecoration: item.complete ? "line-through" : "none",
                    }}
                  >
                    {" "}
                    {item.TodoName}
                  </li>
                </ul>
              </div>
            );
          })
        : " No Todo found"}
    </>
  );
}

export default Todo;
