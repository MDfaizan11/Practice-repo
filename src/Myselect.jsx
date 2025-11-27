import React from "react";
import { useState } from "react";
function Myselect() {
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
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const filterList = cityNames.filter((city) => {
    return city.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <p>Myselect</p>

      <div
        onClick={() => setToggle(!toggle)}
        style={{ border: "1px solid black", width: "200px" }}
      >
        <p>{selectedCity || "select city "} </p>
      </div>

      <div>
        {toggle && (
          <div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "200px",
                overflowY: "scroll",
              }}
            >
              {filterList.map((city) => (
                <div
                  key={city}
                  style={{
                    maxHeight: "150px",
                    overflowY: "auto",
                  }}
                  onClick={() => setSelectedCity(city)}
                >
                  <p>{city}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Myselect;
