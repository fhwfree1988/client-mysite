import React, {useEffect, useState} from "react";
import Login from "../Components/Login/Login";
import AuthenticationType from "./AuthenticationType";

const Authentication = (props: any) =>{
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

    useEffect(()=>{
        console.log("Authenticated toString---> " + Authenticated.accessToken);
        if(localStorage.getItem("Authentication") != null && localStorage.getItem("Authentication")!.trim() != ''){
            auth = JSON.parse(localStorage.getItem("Authentication")! || "")
            console.log("useEffect ---> " + auth.accessToken);
            setAuthenticated(auth);
        }
    },[])



    let ret = props.children;
    if(!Authenticated.login){
        ret = <Login/>;
        console.log("-- Authenticate Failed -- ");
    }else {
        console.log("-- Authenticate Done -- ");
    }

    return <div style = {{height:"100vh"}}>{ret}</div>;
};

export default Authentication;