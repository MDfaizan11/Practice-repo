import React from "react";
import Select from "react-select";

function SearchableDropdown() {
  const cityNames = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const option = cityNames.map((item) => ({
    value: item,
    label: item.toLowerCase(),
  }));
  console.log(option);

  function handleSelectMultiple(selected) {
    const value = selected?.map((item) => item.value || []);
    console.log(value);
  }
  return (
    <div style={{ width: "250px" }}>
      <p className="text-lg font-semibold mb-2">Select City</p>

      <Select
        options={option}
        isClearable
        isMulti
        onChange={handleSelectMultiple}
      />
    </div>
  );
}

export default SearchableDropdown;
