import MenuI, {MenuDataI, MenuPosition} from "./MenuI";
import "./Menu.css"
import {FC} from "react";


const Menu= (props:{menuData: { data:MenuI ,menuPosition:MenuPosition},onClick:any})=>{
    debugger;
    return(
        <>
            {(!props.onClick && props.menuData.data.href != ""?
                <a className={props.menuData.menuPosition == MenuPosition.Top? "menu-upper-container-top":"menu-upper-container-side"} href={props.menuData.data.href}>
                    <div className={props.menuData.menuPosition == MenuPosition.Top? "menu-container-top":"menu-container-side"}>
                        {/*<img className="menu-icon" src={menuData.data.picUrl ? menuData.data.picUrl :''}/>*/}
                        <span className="material-symbols-outlined">{props.menuData.data.picUrl}</span>
                        <div className="menu-title" >{props.menuData.data.title ? props.menuData.data.title :''}</div>
                    </div>
                </a>
                :
                <div className={props.menuData.menuPosition == MenuPosition.Top? "menu-upper-container-top":"menu-upper-container-side"} onClick={()=>props.onClick}>
                    <div className={props.menuData.menuPosition == MenuPosition.Top? "menu-container-top":"menu-container-side"}>
                        {/*<img className="menu-icon" src={menuData.data.picUrl ? menuData.data.picUrl :''}/>*/}
                        <span className="material-symbols-outlined">{props.menuData.data.picUrl}</span>
                        <div className="menu-title" >{props.menuData.data.title ? props.menuData.data.title :''}</div>
                    </div>
                </div>)
            }
        </>


    )
}
export default Menu
