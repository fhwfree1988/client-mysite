
import React,{useState} from "react";

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

    return (
       /* <AuthContext.Provider value={token}>
            <h1>React Router</h1>

            <Navigation onLogout={handleLogout} />

            <Routes>
                ...
            </Routes>
        </AuthContext.Provider>*/
        <div>Hello App Login</div>
    );
}

export default MainApp

