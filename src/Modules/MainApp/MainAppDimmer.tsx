import "./MainApp.css";
import PageLogo from "./asset/Page-logo.png";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "../Components/ReactDimmerMenu/Modal";
import { Menu } from "../Components/ReactDimmerMenu/Menu";
import { ReactDimmer } from "react-dimmer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "../Pages/About/About";
import Button from "@mui/material/Button";
import UserRequestI from "./UserRequestI";
import axios from "axios";


export const MyContent = () => {
    /*const [isModalOpen, setModal] = useState(false);*/
    const [isMenuOpen, setMenu] = useState(false);

    /*const handleClick = () => {
        setModal((prevState) => !prevState);
    };*/

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    const [content, setContent] = useState("");

    const logout = () => {
        localStorage.setItem('Authentication', '');
        refreshPage()
    }
    const refreshPage = () =>{
        window.location.reload();
    };
    const getInfo = () => {
        const userRequest : UserRequestI = {
            id: -1,
            username: "",
            email: "",
            roles: [
                "ROLE_GUEST"
            ],
            accessToken: "",
            tokenType: ""
        }
        axios.get('http://localhost:8080/api/test/all'/*, userRequest*/)
            .then((response) => {
                console.log("response ---> " + response.data);
                setContent(response.data);
            }, (error) => {
                console.log(error);
            });
        return true;
    }
    return (
        <>
            <div className="app">
                <div className="header">
                    <GiHamburgerMenu className="menu-btn" onClick={handleMenu}/>
                    {content}

                    <img src={PageLogo} className="logo"/>
                    {/*<h1>My App</h1>*/}
                    {/*<div className="nav"></div>*/}
                    {/*<Button className="signin-button" variant="contained" onClick={() => getInfo()}>Get Info</Button>
                    <Button className="signout-button" variant="contained" onClick={() => logout()}>Sign Out</Button>*/}
                    <Button className="signout-button" variant="contained" onClick={() => logout()}>Sign Out</Button>
                </div>

                <div className="body">
                   <Outlet />
                </div>
            </div>
            {/*{isModalOpen && <Modal closeModal={setModal}/>}*/}
            <Menu isMenuOpen={isMenuOpen}/>

           {/* <ReactDimmer
                isOpen={isModalOpen}
                exitDimmer={setModal}
                zIndex={100}
                blur={1.5}
            />*/}
            <ReactDimmer
                isOpen={isMenuOpen}
                exitDimmer={setMenu}
                zIndex={100}
                blur={1.5}
            />
        </>

    )

}
const MainAppDimmer = ()=>{

    const router = createBrowserRouter([
        {
            /*path: "/",*/
            element: <MyContent/>,
            /*loader: async () => {
                return fakeDb.from("teams").select("*");
            },*/
            children: [
                {
                    path: "/",
                    element: <div>Hello</div>,
                },
                {
                    path: "/about",
                    element: <About/>,
                    /* loader: async ({ params }) => {
                         return fetch(`/api/teams/${params.teamId}.json`);
                     },*/
                },
                {
                    path: '/profile',
                    element: <div>profile</div>,
                }
            ],
        },
    ]);


    return (
        <RouterProvider router={router} />
    );

}

export default MainAppDimmer;
