import React, { useState } from "react";

function Toggle() {
  const [itemId, setItemId] = useState("");
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
    </div>
  );
}

export default Toggle;
