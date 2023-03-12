
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import UserRequest from "./UserRequest";
import AuthenticationType from "../Security/AuthenticationType";
import Menu from "../Components/Menu/Menu";

const AuthContext = React.createContext(null);
const useAuth = () => {
    return React.useContext(AuthContext);
};

/*const Navigation = () => {
    const { onLogout } = useAuth();

    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    );
};

const AuthProvider = ({ children}) => {
    const [token, setToken] = useState(null);

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
const Home = () => {
    const { onLogin } = useAuth();

    return (
        <>
            <h2>Home (Public)</h2>

            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </>
    );
};*/

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

    return (
       /* <AuthContext.Provider value={token}>
            <h1>React Router</h1>

            <Navigation onLogout={handleLogout} />

            <Routes>
                ...
            </Routes>
        </AuthContext.Provider>*/
        <div>
            <Menu state={setPage}/>
            <div>
                {page}
                Hello App Login
                {content}
            </div>
            <Button className="signin-button" variant="contained" onClick={() => getInfo()}>Get Info</Button>
            <Button className="signin-button" variant="contained" onClick={() => logout()}>Sign Out</Button>
        </div>

    );
}

export default MainApp

