import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import UserRequestI from "./UserRequestI";
import Pages from "../Components/Pages/Pages";
import About from "../Pages/About/About";
import "./MainApp.css"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import MenuI, {MenuPosition} from "../Components/Pages/MenuI";

/*const AuthContext = React.createContext(null);
const useAuth = () => {
    return React.useContext(AuthContext);
};*/

const myItems:MenuI[]=
    [
        {keyID:1,title:'',picUrl:'home',href:'/'},
        {keyID:2,title:'Profile',picUrl:'settings',href:'/profile'},
        {keyID:3,title:'About',picUrl:'apps',href:'/about'},
    ]

let menuPosition:MenuPosition = MenuPosition.Side;

const HeaderLayout = () => (
    <>
        <header className={menuPosition == MenuPosition.Top ? "header-menu-top":"header-menu-side"} >
            <Pages menuItems={myItems}  menuPosition={menuPosition}  />
        </header>
        <div className={menuPosition == MenuPosition.Top ? "content-menu-top":"content-menu-side"}>
            <Outlet />
        </div>

    </>
);
const router = createBrowserRouter([
    {
        /*path: "/",*/
        element: <HeaderLayout/>,
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

const MainApp = ()=>{


    //const [token, setToken] = useState(null);
    const [content, setContent] = useState("");
    const [page, setPage] = useState("/Home");

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


    useEffect(()=>{
        console.log("useEffect ---> content is changed ");
    },[content])

    const returnPage = (page:String) =>{
        if(page === "/About")
            return (<About></About>);
        return "";
    };
    return (
        <div className="main-app">
            {/*<Pages state={setPage}/>*/}
            <div className="contet-pages">
                {/*{returnPage(page)}*/}
                <RouterProvider router={router} />
                {content}
            </div>
            <Button className="signin-button" variant="contained" onClick={() => getInfo()}>Get Info</Button>
            <Button className="signin-button" variant="contained" onClick={() => logout()}>Sign Out</Button>
        </div>

    );
}

export default MainApp

