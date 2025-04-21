import React from "react";

function NavItem({ item }: { item: string }) {
  return (
    <li className="flex items-center justify-center w-full h-12 text-lg font-normal text-white transition-colors duration-300 ease-in-out rounded-md  hover:text-[#f8f8f2] relative group">
      <a href={"/" + item} className="relative z-10">
        {item}
      </a>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f8f8f2] transition-all duration-300 group-hover:w-full"></span>
    </li>
  );
}

export default NavItem;
