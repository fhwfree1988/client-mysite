import axios from "axios";
import {ChangeEvent, useState} from "react";
import "./login.css";

interface LoginState {
    username: string,
    password: string
}

const defaultUser = {
    username: "",
    password: ""
}

const Login = () => {

    const [loginState, setLoginState] = useState(defaultUser);

    const login = (/*username: string, password: string*/) => {
        /*const loginStateNew = {
            username: username,
            password: password
        }
        setLoginState(loginStateNew);*/
        const UserCredentials = {
            username: loginState.username,
            password: loginState.password
        };
        //debugger;
        /*axios.post('http://localhost:8080/api/auth/signin', { UserCredentials })
            .then((res: { data: any; }) => {
                console.log(res);
                console.log(res.data);
            })*/
        axios.post('http://localhost:8080/api/auth/signin', /*{
            username: loginState.username,
            password: loginState.password
        }*/UserCredentials)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        return true;
    }

   /* const onChangeUsername = (username: string) => {

    }
    const onChangePassword = (password: string) => {npm i react-axios

    }*/

    const handleInputChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>{
        const loginStateNew = {
            username: e.target.value,
            password: loginState.password
        }
        setLoginState(loginStateNew);
    };

    const handleInputChangePassword = (e: ChangeEvent<HTMLInputElement>) =>{
        const loginStateNew = {
            username: loginState.username,
            password: e.target.value
        }
        setLoginState(loginStateNew);
    };

    return (
        <div>
            <div className="loginPanel">
                <div className="usernamePanel">
                    <div className="usernameLabel">Username</div>
                    <input className="usernameText" type={"text"} onChange={(e) => handleInputChangeUsername(e)}></input>

                </div>
                <div className="passwordPanel">
                    <div className="passwordLabel">Password</div>
                    <input className="passwordText" type={"text"} onChange={(e) => handleInputChangePassword(e)}></input>
                </div>
                <div className="messagePanel">
                    <div className="message"></div>
                </div>
                <div className="buttonPanel">
                    <button onClick={() => login()}></button>
                </div>
            </div>
        </div>
    );

}
export default Login;