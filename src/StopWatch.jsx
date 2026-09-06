// // import React, { useEffect, useState } from "react";

// // function StopWatch() {
// //   const [time, setTime] = useState(0);
// //   const [running, setIsrunning] = useState(false);
// //   useEffect(() => {
// //     let timer;
// //     if (running) {
// //       timer = setInterval(() => {
// //         setTime(time + 1);
// //       }, 1000);
// //     }
// //     return () => clearInterval(timer);
// //   }, [time, running]);

// //   const hours = Math.floor(time / 3600);
// //   const minutes = Math.floor((time % 3600) / 60);
// //   const sec = Math.floor(time % 60);
// //   return (
// //     <>
// //       {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
// //       {sec.toString().padStart(2, "0")}
// //       <p>StopWatch</p>
// //       <button onClick={() => setIsrunning(true)}>start</button>
// //       <button onClick={() => setIsrunning(false)}>Stop</button>
// //       <button
// //         onClick={() => {
// //           setIsrunning(false);
// //           setTime(0);
// //         }}
// //       >
// //         Reset
// //       </button>
// //     </>
// //   );
// // }

// // export default StopWatch;
// import React, { useEffect, useState } from "react";

// function StopWatch() {
//   const [running, setRunning] = useState(false);
//   const [time, setTime] = useState(0);

//   const [RunningTwo, setRunningTwo] = useState(false);
//   const [TimeTwo, setTimeTwo] = useState(0);

//   useEffect(() => {
//     if (!running) return;
//     const timer = setInterval(() => {
//       setTime(time + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [time, running]);

//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const secound = Math.floor(time % 60);

//   useEffect(() => {
//     if (!RunningTwo) return;
//     const run = setInterval(() => {
//       setTimeTwo(TimeTwo + 1);
//     }, 1000);
//     return () => clearInterval(run);
//   }, [TimeTwo, RunningTwo]);

//   const newHours = Math.floor(TimeTwo / 3600);
//   const MinutesTwo = Math.floor((TimeTwo % 3600) / 60);
//   const SecountTwo = Math.floor(TimeTwo % 60);
//   return (
//     <>
//       <p>StopWatch</p>
//       {hours.toString().padStart(2, "0")}: {minutes.toString().padStart(2, "0")}
//       :{secound.toString().padStart(2, "0")}
//       <button onClick={() => setRunning(true)} disabled={running}>
//         start
//       </button>
//       <button
//         onClick={() => {
//           setRunning(false);
//         }}
//       >
//         Pause
//       </button>
//       <button
//         onClick={() => {
//           setRunning(false);
//           setTime(0);
//         }}
//       >
//         reset
//       </button>
//       {/* ***************************** */}
//       <button onClick={() => setRunningTwo(true)}>Start</button>
//       <button onClick={() => setRunningTwo(false)}>Pause</button>
//       <button
//         onClick={() => {
//           setRunningTwo(false);
//           setTimeTwo(0);
//         }}
//       >
//         Restart
//       </button>
//       {newHours.toString().padStart(2, "0")}:
//       {MinutesTwo.toString().padStart(2, "0")}:
//       {SecountTwo.toString().padStart(2, "0")}
//     </>
//   );
// }

// export default StopWatch;

import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const [newTime, setNewTime] = useState(0);
  const [newRunning, setNewRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, running]);
  // console.log(time);
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);

  useEffect(() => {
    if (!newRunning) return;
    const timer = setInterval(() => {
      setNewTime(newTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [newTime, newRunning]);

  const hours = Math.floor(newTime / 3600);
  const mins = Math.floor((newTime % 3600) / 60);
  const secound = Math.floor(newTime % 60);

  function handlePause() {
    setNewRunning(false);
  }
  return (
    <>
      <div>
        StopWatch
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
        >
          Restart
        </button>
        {hour.toString().padStart(2, "0")}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}
      </div>

      <div>
        <button onClick={() => setNewRunning(true)}>Start</button>
        <button onClick={handlePause}>pause</button>
        <button
          onClick={() => {
            setNewRunning(false);
            setNewTime(0);
          }}
        >
          reset
        </button>
        {hours.toString().padStart(2, "0")}:{mins.toString().padStart(2, "0")}:
        {secound.toString().padStart(2, "0")}
      </div>
    </>
  );
}

export default StopWatch;
