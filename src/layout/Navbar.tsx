import React from "react";
import GroupItems from "./GroupItems";
import NavItem from "../components/NavItem";
import Logo from "../components/Logo";

function Navbar({ items }: { items: string[] }) {
  return (
    <div className="flex items-center justify-between w-full px-48   text-[#f8f8f2]">
      <Logo />
      <GroupItems>
        {items.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </GroupItems>
    </div>
  );
}

export default Navbar;
