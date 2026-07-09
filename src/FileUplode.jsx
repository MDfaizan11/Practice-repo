// // import React, { useCallback, useState } from "react";

// // function FileUplode() {
// //   const [name, setname] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [number, setNumber] = useState("");
// //   const [file, setFile] = useState("");

// //   const handleSubmitdata = useCallback(
// //     (e) => {
// //       e.preventDefault();
// //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //       const numberRegex =
// //         /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
// //       if (!name.trim()) return alert("Please enter a name");
// //       if (!emailRegex.test(email)) {
// //         return alert("Check Email");
// //       }
// //       if (!numberRegex.test(number)) {
// //         return alert("Check Number");
// //       }
// //       if (!file) {
// //         return alert("please Select File");
// //       }
// //       const formdata = new FormData();
// //       formdata.append("file", file);
// //       const body = {
// //         name: name,
// //         email: email,
// //         number: number,
// //         file: file.name,
// //       };
// //       console.log(body);
// //       localStorage.setItem("file", JSON.stringify(body));
// //       alert("data add");
// //     },
// //     [name, email, number, file]
// //   );
// //   return (
// //     <>
// //       <p>FileUplode</p>

// //       <form onSubmit={handleSubmitdata}>
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setname(e.target.value)}
// //           placeholder="Enter Name Here.."
// //         />
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Enter Email Here.."
// //         />
// //         <input
// //           value={number}
// //           onChange={(e) => setNumber(e.target.value)}
// //           placeholder="Enter Number Here.."
// //         />
// //         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </>
// //   );
// // }

// // export default FileUplode;

import React, { useCallback, useState } from "react";

function FileUplode() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [NewFile, setNewFile] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [file, setFile] = useState("");
  // const [togglePassword, setTogglePassword] = useState(false);

  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();

  //     if (!email) {
  //       return alert("Email Required");
  //     }
  //     if (!password) {
  //       return alert("password required");
  //     }
  //     if (!file) {
  //       return alert("file required");
  //     }

  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const obj = {
  //       email: email,
  //       password: password,
  //       file: file.name,
  //     };

  //     localStorage.setItem("files", JSON.stringify(obj));
  //   },
  //   [email, password, file],
  // );

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (newName.trim() === "") {
      return alert("Please enter a name");
    }

    if (!emailRegex.test(newEmail)) {
      alert("email is required");
    }
    if (!phoneRegex.test(newNumber)) {
      alert("number required");
    }
    if (!NewFile) {
      alert("file required");
    }
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(NewFile.type)) {
      return alert("Only JPG, PNG and PDF files are allowed");
    }

    // Max size: 2 MB
    const maxSize = 2 * 1024 * 1024;

    if (NewFile.size > maxSize) {
      return alert("File size must be less than 2 MB");
    }

    const obj = {
      name: newName,
      email: newEmail,
      number: newNumber,
      file: NewFile.name,
    };
    localStorage.setItem("files2", JSON.stringify(obj));
    alert("Data added successfully");
  };
  return (
    <>
      <p>FileUplode</p>

      {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={togglePassword ? "text" : "password"}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setTogglePassword(!togglePassword)}
        >
          view pass
        </button>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Submit</button>
      </form> */}

      <form action="" onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="enter your name"
        />
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="enter email"
        />
        <input
          type="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="enter number"
        />
        <input type="file" onChange={(e) => setNewFile(e.target.files[0])} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default FileUplode;
