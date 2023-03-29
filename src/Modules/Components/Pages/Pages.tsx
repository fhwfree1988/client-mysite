import React from "react";
import './Pages.css';
import Menu from "./Menu"
import MenuI, {MenuPosition} from "./MenuI";


const Pages = (props: { menuPosition: MenuPosition; menuItems: MenuI[] })=>{

    /*function Home() {
        props.state("/Home");
    }
    function About() {
        props.state("/About");
    }
    function Profile() {
        props.state("/Profile");
    }*/
    function onClick(){
        alert("click me")
    }
    const toggleMenu :MenuI = {keyID:0,title:'',picUrl:'home',href:''};
    return(
        <div className={props.menuPosition == MenuPosition.Top ? "menu-side-container":"menu-Top-container"}>
            {/*<div className='menu-container'>
                <div className='menu-item' onClick={()=>Home()}> A </div>
                <div className='menu-item' onClick={()=>About()}> B </div>
                <div className='menu-item' onClick={()=>Profile()}> C </div>
            </div>*/}
            <Menu menuData={{data:toggleMenu,menuPosition:props.menuPosition}} onClick={()=> {onClick()}} />
            {
                props.menuItems.map(item=>{
                    return <Menu menuData={{data:item,menuPosition:props.menuPosition}} onClick={null} />
                })
            }
        </div>
    );



}

export default Pages;