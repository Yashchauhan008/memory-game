import React, { useState, useEffect } from 'react';
import { getTeamNameFromLocalStorage } from '../utils/localStorage';

const Secreat = () => {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    const temp = getTeamNameFromLocalStorage();
    setTeamName(temp);
  }, []);

  

  return (
    <>
      <h1>tem name : {teamName}</h1>
      
    </>
  );
};

export default Secreat;
