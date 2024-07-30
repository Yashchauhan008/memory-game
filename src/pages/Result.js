
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Result = () => {
//   const navigate = useNavigate();
//   const solution = [
//     "<h1>",
//     "<div>",
//     "<i>",
//     "<form>",
//     "<delete>",
//     "<table>",
//     "<br>",
//     "<sup>",
//     "<ul>",
//     "<li>",
//     "<ol>",
//     "<u>",
//     "<link>",
//     "<img>",
//     "Ctrl+W:",
//     "Win+Tab:",
//     "Ctrl+Shift+T:",
//     "Ctrl+Shift+B:",
//     "Alt+F4:",
//     "Ctrl+U:",
//     "Ctrl+I:",
//     "Ctrl+E:",
//     "Win+X:",
//     "Alt+D:",
//     "Ctrl+L"
//   ];
//   const [score, setScore] = useState(0);
//   const [checkedValues, setCheckedValues] = useState([]);

//   useEffect(() => {
//     const storedCheckedValues = JSON.parse(localStorage.getItem("checkedValues")) || [];
//     setCheckedValues(storedCheckedValues);

//     const matchedCount = storedCheckedValues.filter((value) => solution.includes(value)).length;
//     setScore(matchedCount);
//   }, [solution]);

//   return (
//     <>
//       <button onClick={() => navigate("/exam")}>Back</button>
//       <div>Result</div>
//       <div>Your score is: {score} / {solution.length}</div>
//     </>
//   );
// };

// export default Result;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const solution = [
    "<th>", "<u>", "<img>", "<i>", "<b>", "<button>", "<dd>", "<form>", "<table>", 
    "<delete>", "<br>", "<sup>", "<ul>", "<ol>", "<li>", "Ctrl+W:", "Win+Tab:", 
    "Ctrl+Shift+T:", "Ctrl+Shift+B:", "Alt+F4:", "Ctrl+I:", "Ctrl+U:", "Ctrl+E:", 
    "Win+X:", "Alt+D:", "Ctrl+L:"
  ];
  const [score, setScore] = useState(0);
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    const storedCheckedValues = JSON.parse(localStorage.getItem("checkedValues")) || [];
    setCheckedValues(storedCheckedValues);

    const matchedCount = storedCheckedValues.filter((value) => solution.includes(value)).length;
    setScore(matchedCount);
  }, []);

  return (
    <>
      <button onClick={() => navigate("/exam")}>Back</button>
      <div>Result</div>
      <div>Your score is: {score} / {solution.length}</div>
      <div>
        Checked Values: {checkedValues.join(", ")}
      </div>
      <div>
        Solution: {solution.join(", ")}
      </div>
    </>
  );
};

export default Result;
