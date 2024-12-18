import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/result.css";

const Result = () => {
  const navigate = useNavigate();
  const solution = [
    "<th>",
    "<u>",
    "<img>",
    "<i>",
    "<b>",
    "<button>",
    "<dd>",
    "<form>",
    "<table>",
    "<delete>",
    "<br>",
    "<sup>",
    "<ul>",
    "<ol>",
    "<li>",
    "Ctrl+W",
    "Win+Tab",
    "Ctrl+Shift+T",
    "Ctrl+Shift+B",
    "Alt+F4",
    "Ctrl+I",
    "Ctrl+U",
    "Ctrl+E",
    "Win+X",
    "Ctrl+L",
  ];
  const [score, setScore] = useState(0);
  const [checkedValues, setCheckedValues] = useState([]);

  var teamName = localStorage.getItem("teamName");

  useEffect(() => {
    const storedCheckedValues =
      JSON.parse(localStorage.getItem("checkedValues")) || [];
    setCheckedValues(storedCheckedValues);

    const matchedCount = storedCheckedValues.filter((value) =>
      solution.map((sol) => sol.toLowerCase()).includes(value.toLowerCase())
    ).length;
    setScore(matchedCount);
  }, []);

  return (
    <>
      <div className="result">
        <h3>{teamName}</h3>

        {/* <button onClick={() => navigate("/exam")}>Back</button> */}
        {/* <div>Result</div> */}

        <h1>Your score 🏆</h1>
        <div>{score}</div>
        {/* <div>
        Checked Values: {checkedValues.join(", ")}
      </div> */}
        {/* <div>
        Solution: {solution.join(", ")}
      </div> */}
      </div>
      <ul class="circles">
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
    </>
  );
};

export default Result;
