import { useState } from "react";
import '../css/imgdefuser.css';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button 
      className={`toggle-button ${isChecked ? 'checked' : ''}`} 
      onClick={handleClick}
    >
      {isChecked ? "Checked" : "Unchecked"}
    </button>
  );
};

export default ToggleButton;
