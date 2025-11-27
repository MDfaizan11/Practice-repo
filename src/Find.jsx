import React from "react";
import { useState, useEffect } from "react";
function Find() {
  const mydata = JSON.parse(localStorage.getItem("findData")) || [];
  console.log(mydata);
  const [filteredData, setFilteredData] = useState(mydata);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /^\d{10}$/;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (name.trim() === "") {
        alert("Name is required");
        return;
      } else if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
      } else if (!numberRegex.test(number)) {
        alert("Invalid number format");
        return;
      }

      const finduser = mydata.find((user) => user.email === email);
      if (finduser) {
        alert("User with this email already exists");
        return;
      }
      const body = {
        name,
        email,
        number,
      };
      const updatadata = [...mydata, body];
      localStorage.setItem("findData", JSON.stringify(updatadata));
      alert("Data saved successfully!");
      setName("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const debouncing = setTimeout(() => {
      if (filter.trim === "") {
        setFilter(mydata);
      } else {
        const filterwithDebounce = mydata.filter((item) => {
          return item.name.toLowerCase().includes(filter.toLowerCase());
        });
        setFilteredData(filterwithDebounce);
      }
    }, 2000);
    return () => clearTimeout(debouncing);
  }, [filter, mydata]);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <p>Find</p>
      <input
        type="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit"> {loading ? "loading.." : "submit"}</button>
      </form>

      {filteredData.length > 0
        ? filteredData.map((item, index) => {
            return (
              <div key={index}>
                <p>Name:{item.name}</p>
                <p>Email:{item.email}</p>
                <p>Number:{item.number}</p>
              </div>
            );
          })
        : "No data found"}
    </>
  );
}

export default Find;
