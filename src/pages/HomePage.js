import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { saveTeamNameToLocalStorage } from "../utils/localStorage";
import "../css/home.css";

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
      <div className="home">
        {/* <button
          onClick={() => {
            navigate("/blinker");
          }}
        >
          blinker
        </button> */}
        <h1>Randomizer</h1>
        <h3>Enter the name of your team</h3>
        {/* <input type="text" ref={inputRef} id="teamName" /> */}
        <input
          type="text"
          ref={inputRef}
          class="custom-input"
          placeholder="your team..."
        />

        {/* <button onClick={handleStartTest}>start the test</button> */}
        <button class="cssbuttons-io-button" onClick={handleStartTest}>
          Get started
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
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

export default HomePage;
