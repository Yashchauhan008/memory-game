import React, { useState, useEffect } from 'react';
import ImgDefuser from '../component/ImgDefuser';
import { useNavigate } from 'react-router-dom';

const BlinkerPage = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(20); // Set initial time to 50 seconds

    // useEffect(() => {
    //     if (timeLeft === 0) {
    //         navigate('/exam'); // Navigate to /exam when timer reaches 0
    //     }

    //     const timer = setTimeout(() => {
    //         setTimeLeft(timeLeft - 1);
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, [timeLeft, navigate]);

    return (
        <>
            <div>
                Time left: {timeLeft} seconds
            </div>
            <button onClick={() => navigate('/')}>Back</button>
            <button onClick={() => navigate('/exam')}>Next</button>
            <ImgDefuser />
        </>
    );
};

export default BlinkerPage;
