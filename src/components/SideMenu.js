import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";


function SideMenu() {
  return (
    <aside className="side-bar open">{
      <div>
      <Logo/>
      <MenuLinks/>
      <Search/>
      </div>
    }</aside>
  );
}

export default SideMenu;
