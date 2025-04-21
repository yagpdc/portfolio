import React from "react";

function GroupItems({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex items-center justify-between gap-8">{children}</ul>
  );
}

export default GroupItems;
