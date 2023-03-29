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
        <div className="menu-header">
            <h2>My App Menu</h2>
        </div>
        <div className="menu-content">
            <Pages menuItems={myItems}  menuPosition={menuPosition}  />
        </div>

    </div>
  );
};
