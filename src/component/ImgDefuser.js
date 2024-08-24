import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../css/imgdefuser.css';

const ImgDefuser = () => {
  return (
    <section className="hero-section">
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// const squareData = [
//   { id: 1, text: "<h1>", bgColor: "#FF5733" },
//   { id: 2, text: "<div>", bgColor: "#33FF57" },
//   { id: 3, text: "<i>", bgColor: "#3357FF" },
//   { id: 4, text: "<form>", bgColor: "#F0E68C" },
//   { id: 5, text: "<delete>", bgColor: "#D2691E" },
//   { id: 6, text: "<table>", bgColor: "#8A2BE2" },
//   { id: 7, text: "<br>", bgColor: "#5F9EA0" },
//   { id: 8, text: "<sup>", bgColor: "#FF4500" },
//   { id: 9, text: "<ul>", bgColor: "#DA70D6" },
//   { id: 10, text: "<li>", bgColor: "#FF1493" }, 
//   { id: 11, text: "<ol>", bgColor: "#7FFF00" },
//   { id: 12, text: "<u>", bgColor: "#FFD700" },
//   { id: 13, text: "<link>", bgColor: "#4B0082" },
//   { id: 14, text: "<img>", bgColor: "#FF6347" },
//   { id: 15, text: "Ctrl+W", bgColor: "#4682B4" },
//   { id: 16, text: "Win+Tab:", bgColor: "#2E8B57" },
//   { id: 17, text: "Ctrl+Shift+T", bgColor: "#FFA500" },
//   { id: 18, text: "Ctrl+Shift+B ", bgColor: "#FF69B4" },
//   { id: 19, text: "Alt+F4", bgColor: "#CD5C5C" },
//   { id: 20, text: "Ctrl+U", bgColor: "#8B0000" },
//   { id: 21, text: "Ctrl+I", bgColor: "#00CED1" },
//   { id: 22, text: "Ctrl+E", bgColor: "#9400D3" },
//   { id: 23, text: "Win+X", bgColor: "#00FF7F" },
//   { id: 24, text: "Alt+D", bgColor: "#00008B" },
//   { id: 25, text: "Ctrl+L", bgColor: "#A52A2A" },
// ];

const squareData = [
  { id: 1, text: "<h1>", bgColor: "#DA70D6" },   // Replaced with a pinkish purple
  { id: 2, text: "<div>", bgColor: "#9400D3" },  // Dark purple
  { id: 3, text: "<i>", bgColor: "#FF69B4" },    // Hot pink
  { id: 4, text: "<form>", bgColor: "#BA55D3" }, // Medium orchid
  { id: 5, text: "<delete>", bgColor: "#FF1493" }, // Deep pink
  { id: 6, text: "<table>", bgColor: "#9370DB" }, // Medium purple
  { id: 7, text: "<br>", bgColor: "#D8BFD8" },   // Thistle
  { id: 8, text: "<sup>", bgColor: "#DA70D6" },  // Orchid
  { id: 9, text: "<ul>", bgColor: "#EE82EE" },   // Violet
  { id: 10, text: "<li>", bgColor: "#DDA0DD" },  // Plum
  { id: 11, text: "<ol>", bgColor: "#FF00FF" },  // Magenta
  { id: 12, text: "<u>", bgColor: "#8B008B" },   // Dark magenta
  { id: 13, text: "<link>", bgColor: "#C71585" }, // Medium violet red
  { id: 14, text: "<img>", bgColor: "#DB7093" }, // Pale violet red
  { id: 15, text: "Ctrl+W", bgColor: "#DA70D6" }, // Repeated color for theme consistency
  { id: 16, text: "Win+Tab:", bgColor: "#9400D3" }, // Dark purple
  { id: 17, text: "Ctrl+Shift+T", bgColor: "#FF69B4" }, // Hot pink
  { id: 18, text: "Ctrl+Shift+B", bgColor: "#BA55D3" }, // Medium orchid
  { id: 19, text: "Alt+F4", bgColor: "#FF1493" }, // Deep pink
  { id: 20, text: "Ctrl+U", bgColor: "#9370DB" }, // Medium purple
  { id: 21, text: "Ctrl+I", bgColor: "#D8BFD8" }, // Thistle
  { id: 22, text: "Ctrl+E", bgColor: "#DA70D6" }, // Orchid
  { id: 23, text: "Win+X", bgColor: "#EE82EE" },  // Violet
  { id: 24, text: "Alt+D", bgColor: "#DDA0DD" },  // Plum
  { id: 25, text: "Ctrl+L", bgColor: "#FF00FF" }, // Magenta
];


const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="square"
      style={{
        backgroundColor: sq.bgColor,
      }}
    >
      {sq.text}
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="shuffle-grid">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ImgDefuser;
