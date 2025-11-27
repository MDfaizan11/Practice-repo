import React, { useState } from "react";

function CustomSelect() {
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

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredCities = cityNames.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <p className="text-lg font-semibold mb-2">Select City</p>

      {/* "Fake" select input */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "6px",
          cursor: "pointer",
          background: "#fff",
        }}
      >
        {selectedCity || "Select city"}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "105%",
            left: 0,
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "6px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 100,
          }}
        >
          {/* Search input inside dropdown */}
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "90%",
              margin: "8px",
              padding: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  {city}
                </div>
              ))
            ) : (
              <div style={{ padding: "8px", color: "#888" }}>No city found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
