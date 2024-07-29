import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(20); // Set initial time to 50 seconds

  useEffect(() => {
      if (timeLeft === 0) {
          navigate('/result'); // Navigate to /exam when timer reaches 0
      }

      const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
  }, [timeLeft, navigate]);


  return (
    <>
      <h3>select all the tag from previous blinker</h3>
      <button
        onClick={() => {
          navigate("/blinker");
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          navigate("/result");
        }}
      >
        next
      </button>
      <hr />
      <div>Time left: {timeLeft} seconds</div>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <div>Exam</div>
      <button>complate</button>
    </>
  );
};

export default Exam;
