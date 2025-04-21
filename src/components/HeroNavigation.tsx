import React from "react";

function HeroNavigation({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start h-full justify-end">{children}</div>;
}

export default HeroNavigation;
