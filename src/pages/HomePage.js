import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => {navigate("/blinker");}}>blinker</button>
      <h1>HomePage</h1>
      <h3>enter the name of your team</h3>
      <input type="text" id="teamName" />
      <hr/>
      <button onClick={() => {navigate("/blinker");}}>start the test</button>
    </>
  );
};

export default HomePage;
