import { useEffect, useState } from "react";

const MatrixRevealText = ({ text = "MyName", speed = 30, delay = 80 }) => {
  const [displayText, setDisplayText] = useState("_".repeat(text.length));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    let currentIndex = 0;

    const animateLetter = (index) => {
      let iterations = 0;
      const maxIterations = 8;

      const interval = setInterval(() => {
        if (iterations < maxIterations) {
          const randomChar = letters[Math.floor(Math.random() * letters.length)];
          const updated =
            text.substring(0, index) + randomChar + displayText.substring(index + 1);
          setDisplayText(updated);
          iterations++;
        } else {
          const updated =
            text.substring(0, index + 1) + displayText.substring(index + 1);
          setDisplayText(updated);
          clearInterval(interval);

          if (index + 1 < text.length) {
            setTimeout(() => animateLetter(index + 1), delay);
          }
        }
      }, speed);
    };

    animateLetter(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: "2.5rem",
        padding: "20px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        letterSpacing: "2px",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      {displayText}
    </span>
  );
};

export default MatrixRevealText;
