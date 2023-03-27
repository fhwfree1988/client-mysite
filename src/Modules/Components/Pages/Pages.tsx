import React from "react";
import './Pages.css';
import {Link} from "react-router-dom";

const Pages = (/*props:any*/)=>{

    /*function Home() {
        props.state("/Home");
    }
    function About() {
        props.state("/About");
    }
    function Profile() {
        props.state("/Profile");
    }*/
    return(
        <div>
            {/*<div className='menu-container'>
                <div className='menu-item' onClick={()=>Home()}> A </div>
                <div className='menu-item' onClick={()=>About()}> B </div>
                <div className='menu-item' onClick={()=>Profile()}> C </div>
            </div>*/}
            <div>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/profile'> Profile </Link>
            </div>
        </div>
    );



}

export default Pages;