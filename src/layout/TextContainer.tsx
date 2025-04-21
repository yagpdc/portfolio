import React from "react";

export interface TextContainerProps {
  children: React.ReactNode;
  width: "full" | "half";
}

function TextContainer({ children, width = "half" }: TextContainerProps) {
  return (
    <div
      className={`flex ${
        width === "full" ? "w-full" : "w-1/2"
      } flex-col items-start gap-20 justify-center`}
    >
      {children}
    </div>
  );
}

export default TextContainer;
