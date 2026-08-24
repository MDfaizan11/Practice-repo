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

  function hanldeSubData(id) {
    console.log(id);
    setCategory((prev) => (prev === id ? null : id));
  }
  return (
    <div>
      show data
      {data.length > 0
        ? data.map((item) => {
            return (
              <div key={item.id}>
                <p> {item.name}</p>
                <button onClick={() => hanldeSubData(item.id)}>Sub data</button>
                {subcategory === item.id &&
                  item.subcategories.map((sub) => {
                    return (
                      <div key={sub.id}>
                        <p>{sub.name}</p>
                      </div>
                    );
                  })}
              </div>
            );
          })
        : "no data Availble"}
    </div>
  );
}

export default Toggle;
