import "./styles.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "../Components/ReactDimmerMenu/Modal";
import { Menu } from "../Components/ReactDimmerMenu/Menu";
import { ReactDimmer } from "react-dimmer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "../Pages/About/About";


export const MyContent = () => {
    /*const [isModalOpen, setModal] = useState(false);*/
    const [isMenuOpen, setMenu] = useState(false);

    /*const handleClick = () => {
        setModal((prevState) => !prevState);
    };*/

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <>
            <div className="app">
                <div className="header">
                    <GiHamburgerMenu className="menu-btn" onClick={handleMenu}/>
                    <h1>My App</h1>
                    <div className="nav"></div>
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
