import React from "react";
import './Menu.css';

const Menu = (props:any)=>{

    function Home() {
        props.state("/Home");
    }
    function About() {
        props.state("/About");
    }
    function Profile() {
        props.state("/Profile");
    }
    return(
        <div>
            <div className='menu-container'>
                <div className='menu-item' onClick={()=>Home()}> A </div>
                <div className='menu-item' onClick={()=>About()}> B </div>
                <div className='menu-item' onClick={()=>Profile()}> C </div>
            </div>
        </div>
    );



}

export default Menu;