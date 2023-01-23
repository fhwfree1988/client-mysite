import './login.css';
import loginImg from './asset/login.png';
import signupImg from './asset/sign-up-buttons.png';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {ChangeEvent, useState} from 'react';
import axios from 'axios';
//import { Form, Input, Button, Checkbox, message } from 'antd';
//import Icon from '@ant-design/icons';
//const FormItem = Form.Item;



interface LoginState {
    username: string,
    password: string
}

const defaultUser = {
    username: "",
    password: ""
}

const Login = (props: any) => {

    const [loginState, setLoginState] = useState(defaultUser);

    const login = () => {
        const UserCredentials = {
            username: loginState.username,
            password: loginState.password
        };
        axios.post('http://localhost:8080/api/auth/signin', UserCredentials)
            .then((response) => {
                console.log("response ---> " + response.data);
                localStorage.setItem('Authentication', JSON.stringify(response.data));
                refreshPage();
            }, (error) => {
                console.log(error);
            });
        return true;
    }

    const refreshPage = () =>{
        window.location.reload();
    };
    const handleInputChangeUsername = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        const loginStateNew = {
            username: e.target.value,
            password: loginState.password
        }
        setLoginState(loginStateNew);
    };

    const handleInputChangePassword = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        const loginStateNew = {
            username: loginState.username,
            password: e.target.value
        }
        setLoginState(loginStateNew);
    };

    const isLoggedIn = () => {
        return false;
    }
    return(
        <div className="login">
            <div className="login-panel">
                <div className="login-image login-image-animated">
                    <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/>
                </div>
                <div className="signup-button">
                    <img src={signupImg} width="150" height="50" style={{position: 'relative'}} alt="login"/>
                </div>
                <div className="username-panel">
                    <TextField className="username-field" variant="filled" label="Username" onChange={(e) => handleInputChangeUsername(e)}/>
                </div>
                <div className="password-panel">
                    <TextField className="password-field" variant="filled" label="Password" type="password"  onChange={(e) => handleInputChangePassword(e)}/>
                </div>
                <div className="message-panel">
                    <div className="message">Wrong Password/Username</div>
                </div>
                <div className="button-panel">
                    <Button className="signin-button" variant="contained" onClick={() => login()}>Sign In</Button>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default Login;