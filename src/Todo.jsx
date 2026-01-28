import React, { useEffect, useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [EditId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("mytodo")) || [];
    if (storedTodos.length > 0) {
      setData(storedTodos);
    }
  }, []);
  function handleAddTodo(e) {
    e.preventDefault();
    if (!name.trim()) {
      return alert("Name Required");
    }
    if (!age.trim()) {
      return alert("Age Required");
    }
    if (!email.trim()) {
      return alert("Email Required");
    }

    if (EditId) {
      const updatetodo = data.map((item) =>
        item.id === EditId
          ? {
              ...item,
              name: name,
              age: age,
              email: email,
            }
          : item,
      );
      setData(updatetodo);
      localStorage.setItem("mytodo", JSON.stringify(updatetodo));
      alert("Todo Updated");
      setName("");
      setAge("");
      setEmail("");
      setEditId(null);
      return;
    } else {
      const mytodo = {
        id: Date.now(),
        name: name,
        age: age,
        email: email,
      };

      const multipleTodos = [...data, mytodo];

      localStorage.setItem("mytodo", JSON.stringify(multipleTodos));
      setData(multipleTodos);
      alert("Todo Added");
      setName("");
      setAge("");
      setEmail("");
    }
  }

  function handleDeleteTodo(id) {
    const filter = data.filter((item, index) => item.id !== id);
    setData(filter);
    localStorage.setItem("mytodo", JSON.stringify(filter));
    alert("Todo Deleted");
  }

  function handleEdit(item) {
    console.log(item);
    setName(item.name);
    setAge(item.age);
    setEmail(item.email);
    setEditId(item.id);
  }
  return (
    <>
      <p>Todo</p>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>

      {data.length > 0
        ? data.map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDeleteTodo(item.id)}>
                  delete
                </button>
              </ul>
            );
          })
        : "No Todos Found"}
    </>
  );
}

export default Todo;
