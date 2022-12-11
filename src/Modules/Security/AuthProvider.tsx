import React, {useEffect, useState} from "react";
import Login from "../Components/Login/Login";

const Authentication = /*React.FC =*/ (props: any) =>{
    const [isAuthenticated,setAuthenticated] = useState(false);//useSecurity();
    useEffect(()=>{
        setAuthenticated(false);
    },[])

    let ret = props.children;
    if(!isAuthenticated)
        ret = <Login></Login>;

    return <>{ret}</>;
};

export default Authentication;