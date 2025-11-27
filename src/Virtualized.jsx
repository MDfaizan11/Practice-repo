import React from "react";
import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // Import styles if needed

const MyVirtualizedList = () => {
  const users = Array.from({ length: 1000 }).map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `999-999-${1000 + index}`,
    address: `123 Main St, City ${index + 1}`,
    area: `Area ${index % 10}`,
    pincode: `4000${index % 50}`,
  }));

  const rowRenderer = ({ index, key, style }) => {
    const user = users[index];
    return (
      <div
        key={key}
        style={{
          ...style,
          padding: "8px",
          borderBottom: "1px solid #ddd",
          backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
        }}
      >
        <strong>{user.name}</strong>
        <div style={{ fontSize: "12px", color: "#555" }}>{user.email}</div>
      </div>
    );
  };

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const result = array.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    } else {
      return acc;
    }
  });
  console.log(result);
  return (
    <List
      width={1000} // Width of the list container
      height={500} // Height of the visible area
      rowCount={users.length} // Total number of rows
      rowHeight={50} // Fixed height per row
      rowRenderer={rowRenderer}
    />
  );
};

export default MyVirtualizedList;
