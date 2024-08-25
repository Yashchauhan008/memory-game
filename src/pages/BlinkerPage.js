import React, { useState, useEffect } from "react";
import ImgDefuser from "../component/ImgDefuser";
import { useNavigate } from "react-router-dom";
import "../css/blinker.css";
const BlinkerPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(20); // Set initial time to 50 seconds

  useEffect(() => {
      if (timeLeft === 0) {
          navigate('/exam'); 
      }

      const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  return (
    <>
      {/* <button onClick={() => navigate('/')}>Back</button>
            <button onClick={() => navigate('/exam')}>Next</button> */}
      <ImgDefuser />
      <div className="timer">{timeLeft} seconds</div>
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

export default BlinkerPage;
