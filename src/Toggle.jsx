import React, { useState } from "react";

function Toggle() {
  const [itemId, setItemId] = useState("");
  const [newItemId, setNewItemId] = useState("");
  const data = [
    {
      id: 1,
      name: "Fruits",
      subcategories: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
      ],
    },
    {
      id: 2,
      name: "Vegetables",
      subcategories: [
        { id: 1, name: "Carrot" },
        { id: 2, name: "Broccoli" },
      ],
    },
  ];

  function handleShowData(id) {
    console.log(id);
    setItemId((prev) => (prev === id ? null : id));
  }

  function handleOpen(id) {
    setNewItemId((prev) => (prev === id ? null : id));
  }

  return (
    <div>
      show data
      {data.map((item, index) => {
        return (
          <div>
            <p>{item.name}</p>
            <button onClick={() => handleShowData(item.id)}>
              {itemId === item.id ? "close" : "open"}
            </button>
            {itemId === item.id &&
              item.subcategories.map((sub) => {
                return (
                  <div>
                    <p>{sub.name}</p>
                  </div>
                );
              })}
          </div>
        );
      })}
      {data.map((item, index) => {
        return (
          <div>
            <p>{item.name}</p>
            <div
              role="button"
              aria-label="open"
              onClick={() => handleOpen(item.id)}
            >
              {newItemId === item.id ? "close" : "open"}
            </div>
            {newItemId === item.id &&
              item.subcategories.map((item, inex) => {
                return (
                  <div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Toggle;
