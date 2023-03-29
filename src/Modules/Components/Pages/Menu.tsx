import MenuI, {MenuDataI, MenuPosition} from "./MenuI";
import "./Menu.css"

const menuContent = (props:{menuData: { data:MenuI ,menuPosition:MenuPosition},onClick:any})=>{
    return(
        <div className={props.menuData.menuPosition == MenuPosition.Top? "menu-container-top":"menu-container-side"}>
            {/*<img className="menu-icon" src={menuData.data.picUrl ? menuData.data.picUrl :''}/>*/}
            <span className="material-symbols-outlined">{props.menuData.data.picUrl}</span>
            <div className="menu-title" >{props.menuData.data.title ? props.menuData.data.title :''}</div>
        </div>
    )
}
const Menu= (props:{menuData: { data:MenuI ,menuPosition:MenuPosition},onClick:any})=>{
    debugger;
    return(
        <>
            {(!props.onClick && props.menuData.data.href != "" ?
                <a className={props.menuData.menuPosition == MenuPosition.Top? "menu-upper-container-top":"menu-upper-container-side"} href={props.menuData.data.href}>
                    {menuContent(props)}
                </a>
                :
                <div className={props.menuData.menuPosition == MenuPosition.Top? "menu-upper-container-top":"menu-upper-container-side"} onClick={()=>props.onClick()}>
                    {menuContent(props)}
                </div>)
            }
        </>


    )
}
export default Menu
