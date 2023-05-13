import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainApp from "./Modules/MainApp/MainApp";
import Authentication from "./Modules/Security/AuthProvider";
import Login from "./Modules/Components/Login/Login";
import {createBrowserRouter, Link} from "react-router-dom";
import About from "./Modules/Pages/About/About";
import MainAppDimmer from "./Modules/MainApp/MainAppDimmer";
import AuthenticationType from "./Modules/Security/AuthenticationType";
//import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let userAuth : AuthenticationType = {
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
const AuthContext = React.createContext(userAuth);

root.render(

  <React.StrictMode>
      <AuthContext.Provider value={userAuth}>
     <Authentication userAuth={AuthContext}>
         {/*<MainApp></MainApp>*/}
            <MainAppDimmer userAuth={AuthContext}></MainAppDimmer>
     </Authentication>
      </AuthContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
