import React from "react";

function Section({
  children,
  height = `h-[100vh]`,
}: {
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 px-8 p-4 bg-transparent  ${height}  overflow-y-auto`}
    >
      {children}
    </div>
  );
}

export default Section;
