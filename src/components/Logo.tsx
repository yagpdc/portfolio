import React, { useState, useEffect } from "react";

function Logo() {
  const [hovered, setHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState("</>");

  useEffect(() => {
    if (hovered) {
      const fullText = " Yago Santana ";
      let currentIndex = 0;
      let tempText = "<";
      setDisplayedText(tempText);
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          tempText += fullText[currentIndex];
          setDisplayedText(tempText);
          currentIndex++;
        } else {
          clearInterval(interval);
          setDisplayedText(tempText + "/>");
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setDisplayedText("</>");
    }
  }, [hovered]);

  return (
    <li
      className="font-semibold list-none text-lg text-white transition-colors duration-300 ease-in-out rounded-md hover:text-[#f8f8f2]"
      onMouseEnter={() => setHovered(true)}
    >
      <a href="/" className="flex items-center gap-3">
        <span className="transition-all duration-500 ease-in-out">
          {displayedText}
        </span>
      </a>
    </li>
  );
}

export default Logo;
