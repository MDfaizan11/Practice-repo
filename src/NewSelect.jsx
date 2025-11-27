import React, { useCallback } from "react";
import Select from "react-select";
function NewSelect() {
  const cityNames = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
  ];
  const options = cityNames.map((city) => ({
    value: city.id,
    label: city.name,
  }));

  const handleChange = useCallback((selected) => {
    const value = selected ? selected.map((city) => city.value) : [];
    console.log(value);
  }, []);

  return (
    <>
      <p>NewSelect </p>
      <div style={{ width: "250px" }}>
        <Select
          options={options}
          onChange={handleChange}
          isClearable
          isSearchable
          isMulti
        />
      </div>
    </>
  );
}

export default NewSelect;
