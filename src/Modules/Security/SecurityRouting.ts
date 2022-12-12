import React, { useState } from "react";
import App from "../../App";

const SecurityRouting = ()=>{
    const[loginInfo,setLoginInfo] = useState({
        isLoading: false,
        isLoggedIn: false,
        user: {}
    });

/*
    state = {
        isLoading: true,
        isLoggedIn: false,
        user: {}
    }
...
    this.setState({
        isLoading: false,
        isLoggedIn: false
    })
...
    isLoggedIn ? (<Comp {...props} />) : (isLoading ? 'Loading...' : <Redirect to="/" />)
*/

    /*return( loginInfo.isLoggedIn ? (<App/>) : (loginInfo.isLoading ? <App/> : <App/>))*/
}

export default SecurityRouting;
