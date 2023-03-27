
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import UserRequest from "./UserRequest";
import AuthenticationType from "../Security/AuthenticationType";
import Pages from "../Components/Pages/Pages";
import {string} from "prop-types";
import About from "../Pages/About/About";
import "./MainApp.css"
import {createBrowserRouter,RouterProvider,Outlet, Link} from "react-router-dom";
const AuthContext = React.createContext(null);
const useAuth = () => {
    return React.useContext(AuthContext);
};

const HeaderLayout = () => (
    <>
        <header>
            <Pages />
        </header>
        <Outlet />
    </>
);
const router = createBrowserRouter([
    {
        /*path: "/",*/
        element: <HeaderLayout/>,
        /*loader: rootLoader,*/
        children: [
            {
                path: "/",
                element: <div>Hello</div>,
            },
            {
                path: "/about",
                element: <About/>,
                /* loader: eventLoader,*/
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
        const userRequest : UserRequest = {
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

