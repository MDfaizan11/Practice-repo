import React from "react";
import { FixedSizeList } from "react-window";

function Window() {
  const users = Array.from({ length: 1000 }).map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `999-999-${1000 + index}`,
    address: `123 Main St, City ${index + 1}`,
    area: `Area ${index % 10}`,
    pincode: `4000${index % 50}`,
  }));

  const Row = ({ index, style }) => {
    const user = users[index];

    return (
      <div style={{ ...style, padding: "8px", borderBottom: "1px solid #ddd" }}>
        name: {user.name}
      </div>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>React Window Example</h3>
      <FixedSizeList
        height={600}
        itemCount={users.length}
        itemSize={35}
        width={800}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}

export default Window;
