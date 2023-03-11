import React from "react";
import NavItem from "./NavItem";
import { useRouter } from 'next/router';
import { MENU_LIST } from '../constant.js'

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div className={"flex flex-wrap justify-start py-6 md:pt-44 border-b-2 border-light-grey px-6 md:px-16"}>
        {MENU_LIST.map((menu) => (
          <div className="pr-4 md:pr-6" key={menu.path}>
            <NavItem active={pathname === menu.path} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;