// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../css/exam.css'

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
//     console.log(localStorage.getItem("checkedValues"));
//   };

//   return (
//     <>
//       <div className="exam">

//       <h3>Select all the tags from the previous blinker</h3>
//       <button onClick={() => navigate("/blinker")}>Back</button>
//       <button onClick={handleNext}>Next</button>
//       <hr />
//       <div>Time left: {timeLeft} seconds</div>
//       <div className="center-grid">
//         <div className="grid-container">
//           {arr.map((temp, index) => (
//             <button
//             key={index}
//             className={`toggle-button ${checkedStates[index] ? "checked" : ""}`}
//             onClick={() => handleClick(index)}
//             >
//               {temp}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>Exam</div>
//       {/* <button onClick={() => console.log(getCheckedValues())}>Complete</button> */}
//       <button onClick={()=>{handleNext()}}>Complete</button>
//           </div>
//       <ul class="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//     </>
//   );
// };

// export default Exam;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/exam.css";

const Exam = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300); // Set initial time to 20 seconds
  const [inputs, setInputs] = useState(Array(30).fill("")); // Array to store user inputs with 30 empty strings
  // const [timeLeft, setTimeLeft] = useState(20); // Set initial time to 50 seconds

  // Function to handle input change
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Function to handle form submission
  const handleNext = () => {
    // Filter out empty inputs and trim whitespace
    const nonEmptyInputs = inputs.filter((input) => input.trim() !== "");
    localStorage.setItem("checkedValues", JSON.stringify(nonEmptyInputs));
    navigate("/result");
    console.log(localStorage.getItem("checkedValues"));
  };


  useEffect(() => {
      if (timeLeft === 0) {
        handleNext()
      }

      const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  return (
    <>
      <div className="exam">
        <h1>Enter all the tags or commands from the previous blinker</h1>
        {/* <button onClick={() => navigate("/blinker")}>Back</button>
        <button onClick={handleNext}>Next</button> */}
      <div className="timer">{timeLeft} seconds</div>
      <div className="input-container">
          {inputs.map((input, index) => (
            <div class="input-wrapper">
              <input
                className="input"
                key={index}
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                // placeholder={`Input ${index + 1}`}
                placeholder="enter tag or command"
              />
            </div>
          ))}
        </div>
        {/* <div>Exam</div> */}
        <button onClick={handleNext}>
          <span>Complete</span>
        </button>
        {/* <button onClick={handleNext}>Complete</button> */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </>
  );
};

export default Exam;
