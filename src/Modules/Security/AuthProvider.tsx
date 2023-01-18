import React, {useEffect, useState} from "react";
import Login from "../Components/Login/Login";
import LoginPage from "../Components/LoginPage/LoginPage";
import axios from "axios";

interface  AuthenticationType{
    /*token: string,
    isLogin :boolean*/
    id: number,
    username: string,
    email: string,
    roles: string[],
    accessToken: string,
    tokenType: string,
    login :boolean

}
const Authentication = /*React.FC =*/ (props: any) =>{
    /*const [isAuthenticated,setAuthenticated] = useState(false);//useSecurity();
    useEffect(()=>{
        setAuthenticated(false);
    },[])

    if(!isAuthenticated)
        ret = <Login/>;

     */

    //let myAuth = localStorage.getItem('Authentication');
    debugger;
    let auth : AuthenticationType = {
        id: -1,
        username: "",
        email: "",
        roles: [
            "ROLE_GUEST"
        ],
        accessToken: "",
        tokenType: "",
        login :false
    }


    const [Authenticated,setAuthenticated] = useState(auth);//useSecurity();
    //const [Authenticated,setAuthenticated] = useState(auth);
    useEffect(()=>{
        /*.stringify(Authenticated)*/

        //console.log("Authenticated toString---> " + Authenticated.accessToken);
        if(localStorage.getItem("Authentication") != null && localStorage.getItem("Authentication")!.trim() != ''){
            auth = JSON.parse(localStorage.getItem("Authentication")! || "")
            console.log("useEffect ---> " + localStorage.getItem("Authentication"));
            console.log("useEffect ---> " + auth.accessToken);
            console.log("useEffect ---> " + auth.login);
            //auth = localStorage.getItem('Authentication') as unknown as AuthenticationType;
            setAuthenticated(auth);
        }
        //useState(auth)
    },[])
    /*function transform() {
        let auth : AuthenticationType = {
            id: -1,
            username: "",
            email: "",
            roles: [
                "ROLE_GUEST"
            ],
            accessToken: "",
            tokenType: "",
            isLogin :false
        }
        return auth;
    }*/
    debugger;


    //console.log("bef Authentication ---> " + a);
    //console.log("Authentication ---> " + auth);

    /*console.log("render ---> " + Authenticated.isLogin);
    if(!Authenticated.isLogin)
        ret = <Login/>;*/

    let ret = props.children;
    console.log("render ---> " + Authenticated.login);
    if(!Authenticated.login)
        ret = <Login/>;



    return <div style = {{height:"100vh"}}>{ret}</div>;
};

export default Authentication;