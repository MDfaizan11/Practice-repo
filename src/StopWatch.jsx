// import React, { useEffect, useState } from "react";

// function StopWatch() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => {
//         setTime(time + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [time, running]);

//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const secound = Math.floor(time % 60);
//   return (
//     <>
//       {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
//       {secound.toString().padStart(2, "0")}
//       <p>StopWatch</p>
//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>
//       <button
//         onClick={() => {
//           setRunning(false);
//           setTime(0);
//         }}
//       >
//         Reset
//       </button>
//     </>
//   );
// }

// export default StopWatch;

import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setIsrunning] = useState(false);
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [time, running]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);
  return (
    <>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {sec.toString().padStart(2, "0")}
      <p>StopWatch</p>
      <button onClick={() => setIsrunning(true)}>start</button>
      <button onClick={() => setIsrunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsrunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default StopWatch;
