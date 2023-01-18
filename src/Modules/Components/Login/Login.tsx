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
                console.log("response ---> " + response.data);
                localStorage.setItem('Authentication', JSON.stringify(response.data));
                refreshPage();
            }, (error) => {
                console.log(error);
            });
        return true;
    }

   /* const onChangeUsername = (username: string) => {

    }
    const onChangePassword = (password: string) => {npm i react-axios

    }*/
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
        /*if (window.loggedUsername==='guest') {
            return false;
        } else {
            return true;
        }*/
        return false;
    }

    /*const handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var details = {
                    sysparm_type: "login",
                    "ni.nolog.user_password": true,
                    remember_me: values.remember,
                    user_name: values.userName,
                    user_password: values.password,
                    get_redirect_url: true,
                    sysparm_goto_url: "navpage.do"
                };

                var formBody:any[] = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                axios({
                    method: "post",
                    url:
                        "angular.do?sysparm_type=view_form.login",
                    data: formBody,
                    config: {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" }
                    }
                })
                    .then(function(response) {
                        if (response.data.status==='error') {
                            message.error(response.data.message)
                        } else if (response.data.status==='success'){
                            message.success(response.data.message)
                            setTimeout(()=>{window.location = window.mainAppPage;},500);
                        } else {
                            message.warning('Unknown response status'+response.data.message)
                        }
                    })
                    .catch(function(response) {
                        message.error('Network error. Cannot log in.')
                    });
            }
        });
    };*/

    //const { getFieldDecorator } = props.form;
    /*if (isLoggedIn()) {
        window.location = window.mainAppPage;
    }*/
   /* return (
        <div>
            <div className={isLoggedIn() ? ' ' : ' hidden'}>
                Successfully logged in...
            </div>
            <div className={"lContainer"+(isLoggedIn() ? ' hidden' : ' ')}>
                <div className="lItem">
                    <div className="loginImage">
                        <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/>
                    </div>
                    <div className="loginForm">
                        <h2>Login</h2>
                        <Form onSubmitCapture={() => login()} className="login-form">
                            <FormItem>
                                {getFieldDecorator("userName", {
                                    rules: [{ required: true, message: "Please enter your username" }]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        placeholder="Username"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [{ required: true, message: "Please enter your Password" }]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("remember", {
                                    valuePropName: "checked",
                                    initialValue: true
                                })(<Checkbox>Remember me</Checkbox>)}
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
                <div className="footer">
                    <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by React</a>
                </div>
            </div>
        </div>
    );*/

    /*return (
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
    );*/

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
        /*<div>
            <TextField variant="standard" label="Username" />
            <TextField variant="outlined" label="Email" type="email" />
            <TextField variant="filled" label="Password" type="password" />
            <Button variant="contained">Hello World</Button>
        </div>*/
    );
}

//const NormalLoginForm = Form.create()(Login);
export default Login;