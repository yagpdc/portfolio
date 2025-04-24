import { useState, useEffect, useRef } from "react";

function Logo() {
  const [displayedText, setDisplayedText] = useState("</>");
  const [step, setStep] = useState<"idle" | "typing" | "deleting">("idle");
  const animationRunning = useRef(false);

  const handleHover = () => {
    if (!animationRunning.current) {
      animationRunning.current = true;
      setStep("typing");
    }
  };

  useEffect(() => {
    const fullText = " Yago Santana ";
    let currentText = "<";
    let currentIndex = 0;

    if (step === "typing") {
      setDisplayedText(currentText);
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setDisplayedText(currentText + "/>");
          setTimeout(() => setStep("deleting"), 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }

    if (step === "deleting") {
      let tempText = `<${fullText}/>`;

      const deletingInterval = setInterval(() => {
        if (tempText.length > 0) {
          tempText = tempText.slice(0, -1);
          setDisplayedText(tempText);
        } else {
          clearInterval(deletingInterval);
          setDisplayedText("</>");
          animationRunning.current = false;
          setStep("idle");
        }
      }, 50);

      return () => clearInterval(deletingInterval);
    }
  }, [step]);

  return (
    <li
      onMouseEnter={handleHover}
      className="font-semibold list-none text-lg text-white"
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
