import React, { useState } from "react";

function Toggle() {
  const [subcategory, setCategory] = useState(null);

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

  function handleShowSubCategory(id) {
    console.log(id);
    setCategory((prev) => (prev === id ? null : id));
  }
  return (
    <div>
      show data
      {data.map((item, index) => {
        return (
          <>
            <div key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => handleShowSubCategory(item.id)}>
                Show data
              </button>
              {subcategory === item.id &&
                item.subcategories.map((item) => {
                  return <p>{item.name}</p>;
                })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Toggle;
