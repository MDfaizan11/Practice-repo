import React, { useCallback, useState } from "react";
import Select from "react-select";
function NewSelect() {
  const [selectSkill, setSelectSkill] = useState([]);
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

  const skills = [
    { id: 1, name: "React JS", category: "Frontend" },
    { id: 2, name: "JavaScript", category: "Frontend" },
    { id: 3, name: "HTML", category: "Frontend" },
    { id: 4, name: "CSS", category: "Frontend" },
    { id: 5, name: "Node JS", category: "Backend" },
    { id: 6, name: "Express JS", category: "Backend" },
    { id: 7, name: "MongoDB", category: "Database" },
    { id: 8, name: "Git", category: "Tools" },
  ];

  function handleChangeSkill(e) {
    const select = Array.from(e.target.selectedOptions).map(
      (option) => option.value,
    );
    setSelectSkill(select);
    console.log(select);
  }
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

      <select
        name=""
        id=""
        multiple
        value={selectSkill}
        onChange={handleChangeSkill}
      >
        <option value="">Select Skill</option>
        {skills.map((skill) => {
          return <option value={skill.id}>{skill.name}</option>;
        })}
      </select>
    </>
  );
}

export default NewSelect;
