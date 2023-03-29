import * as React from "react";
import Pages from "../Pages/Pages";
import MenuI, {MenuPosition} from "../Pages/MenuI";

interface IMenuProps {
  isMenuOpen: boolean;
}

const myItems:MenuI[]=
    [
        {keyID:1,title:'',picUrl:'home',href:'/'},
        {keyID:2,title:'Profile',picUrl:'settings',href:'/profile'},
        {keyID:3,title:'About',picUrl:'apps',href:'/about'},
    ]

let menuPosition:MenuPosition = MenuPosition.Side;

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <h2>Example App Menu</h2>
        <br/>
        <Pages menuItems={myItems}  menuPosition={menuPosition}  />
    </div>
  );
};
