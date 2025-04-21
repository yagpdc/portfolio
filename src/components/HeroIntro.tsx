import React from "react";

function HeroIntro({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start w-4/5 justify-center gap-4">
      {children}
    </div>
  );
}

export default HeroIntro;
