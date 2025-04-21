import { JSX } from "react";

interface SkillsItemProps {
  icon: string | JSX.Element;
  name: string;
}

function SkillsItem({ icon, name }: SkillsItemProps) {
  return (
    <div className="relative p-6 rounded-lg cursor-pointer group flex items-center flex-col w-fit overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/4 h-0 border-t-2 border-[#f8f8f2] 
          transition-all duration-300 ease-in-out group-hover:w-full"
      ></div>

      <div
        className="absolute right-0 top-0 w-0 h-1/4 border-r-2 border-[#f8f8f2] 
          transition-all duration-300 ease-in-out group-hover:h-full"
      ></div>

      <div
        className="absolute bottom-0 left-0 w-1/4 h-0 border-b-2 border-[#f8f8f2] 
          transition-all duration-300 ease-in-out group-hover:w-full"
      ></div>

      <div
        className="absolute left-0 bottom-0 w-0 h-1/4 border-l-2 border-[#f8f8f2] 
          transition-all duration-300 ease-in-out group-hover:h-full"
      ></div>

      <span className="text-sm font-semibold text-[#f8f8f2] block mb-3">
        {name}
      </span>
      <span className="text-[82px] block text-[#f8f8f2]">{icon}</span>
    </div>
  );
}

export default SkillsItem;
