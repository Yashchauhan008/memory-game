import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { saveTeamNameToLocalStorage } from "../utils/localStorage";

const HomePage = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleStartTest = () => {
    const teamName = inputRef.current.value;
    saveTeamNameToLocalStorage(teamName);
    navigate("/blinker");
  };

  return (
    <>
      <button onClick={() => { navigate("/blinker"); }}>blinker</button>
      <h1>HomePage</h1>
      <h3>enter the name of your team</h3>
      <input type="text" ref={inputRef} id="teamName" />
      <hr />
      <button onClick={handleStartTest}>start the test</button>
    </>
  );
};

export default HomePage;
