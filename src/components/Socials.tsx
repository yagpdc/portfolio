import React from "react";
import TextMedium from "./texts/TextMedium";

function Socials() {
  return (
    <div className="flex flex-col gap-4 px-28 items-start justify-center">
      <TextMedium content="Follow me" />
      <div className="flex gap-4">
        <a
          href={"https://github.com/yagpdc"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
            alt="github"
            className="w-10 h-10"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/yagosantanaf/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            alt="linkedin"
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
}

export default Socials;
