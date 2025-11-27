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

  const options = cityNames.map((city) => ({
    value: city,
    label: city,
  }));
  console.log(options);

  const handleChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <div style={{ width: "250px" }}>
      <p className="text-lg font-semibold mb-2">Select City</p>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Search or select a city..."
        isClearable
        isSearchable
        // isMulti
      />
    </div>
  );
}

export default SearchableDropdown;
