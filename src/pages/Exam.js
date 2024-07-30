
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Exam = () => {
//   const navigate = useNavigate();
//   const [timeLeft, setTimeLeft] = useState(20); // Set initial time to 20 seconds
//   const [checkedStates, setCheckedStates] = useState({}); // Object to store checked state of each button

//   const arr = [
//     "<th>",
//     "<u>",
//     "<img>",
//     "<i>",
//     "<b>",
//     "<button>",
//     "<dd>",
//     "<form>",
//     "<table>",
//     "<delete>",
//     "<insert>",
//     "<br>",
//     "<sub>",
//     "<sup>",
//     "<style>",
//     "<nav>",
//     "<ul>",
//     "<ol>",
//     "<li>",
//     "Ctrl+W:",
//     "Win+Tab:",
//     "Ctrl+Shift+T:",
//     "Ctrl+Shift+B:",
//     "Windows+D:",
//     "Windows+E:",
//     "Alt+F4:",
//     "Ctrl+B:",
//     "Ctrl+I:",
//     "Ctrl+U:",
//     "Ctrl+E:",
//     "Ctrl+Shift+Esc:",
//     "Ctrl+Shift+~:",
//     "Win+L:",
//     "Win+X:",
//     "Ctrl+Shift+F8:",
//     "Alt+E:",
//     "Alt+D:",
//     "Alt+F:",
//     "Ctrl+L:",
//   ];

//   const handleClick = (index) => {
//     setCheckedStates((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   // Function to get an array of values of all checked buttons
//   const getCheckedValues = () => {
//     return Object.keys(checkedStates)
//       .filter((key) => checkedStates[key])
//       .map((key) => arr[parseInt(key, 10)]);
//   };

//   const handleNext = () => {
//     const checkedValues = getCheckedValues();
//     localStorage.setItem("checkedValues", JSON.stringify(checkedValues));
//     navigate("/result");
//   };

//   return (
//     <>
//       <h3>Select all the tags from the previous blinker</h3>
//       <button onClick={() => navigate("/blinker")}>Back</button>
//       <button onClick={handleNext}>Next</button>
//       <hr />
//       <div>Time left: {timeLeft} seconds</div>
//       <div className="center-grid">
//         <div className="grid-container">
//           {arr.map((temp, index) => (
//             <button
//               key={index}
//               className={`toggle-button ${checkedStates[index] ? "checked" : ""}`}
//               onClick={() => handleClick(index)}
//             >
//               {temp}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>Exam</div>
//       {/* <button onClick={() => console.log(getCheckedValues())}>Complete</button> */}
//       <button onClick={()=>{navigate('/result')}}>Complete</button>
//     </>
//   );
// };

// export default Exam;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const navigate = useNavigate();
  const [checkedStates, setCheckedStates] = useState({}); // Object to store checked state of each button

  const arr = [
    "<th>", "<u>", "<img>", "<i>", "<b>", "<button>", "<dd>", "<form>", "<table>", 
    "<delete>", "<insert>", "<br>", "<sub>", "<sup>", "<style>", "<nav>", "<ul>", 
    "<ol>", "<li>", "Ctrl+W:", "Win+Tab:", "Ctrl+Shift+T:", "Ctrl+Shift+B:", 
    "Windows+D:", "Windows+E:", "Alt+F4:", "Ctrl+B:", "Ctrl+I:", "Ctrl+U:", 
    "Ctrl+E:", "Ctrl+Shift+Esc:", "Ctrl+Shift+~:", "Win+L:", "Win+X:", 
    "Ctrl+Shift+F8:", "Alt+E:", "Alt+D:", "Alt+F:", "Ctrl+L:"
  ];

  const handleClick = (index) => {
    setCheckedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Function to get an array of values of all checked buttons
  const getCheckedValues = () => {
    return Object.keys(checkedStates)
      .filter((key) => checkedStates[key])
      .map((key) => arr[parseInt(key, 10)]);
  };

  const handleNext = () => {
    const checkedValues = getCheckedValues();
    localStorage.setItem("checkedValues", JSON.stringify(checkedValues));
    navigate("/result");
  };

  return (
    <>
      <h3>Select all the tags from the previous blinker</h3>
      <button onClick={() => navigate("/blinker")}>Back</button>
      <button onClick={handleNext}>Next</button>
      <hr />
      <div className="center-grid">
        <div className="grid-container">
          {arr.map((temp, index) => (
            <button
              key={index}
              className={`toggle-button ${checkedStates[index] ? "checked" : ""}`}
              onClick={() => handleClick(index)}
            >
              {temp}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exam;
