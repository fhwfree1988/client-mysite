import React, {Component} from 'react'

class TodoApp extends Component{
    
    render(){
        return (
            <div className="TodoApp">
                My Todo App.
                <LoginComponent/>
            </div>
        );
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : 'SampleMe',
            password : ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    render(){
        return(
            <div>
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                <button>Login</button>
            </div>
        )
    }

    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        })
        //console.log(event.target.value)
    }

    handlePasswordChange(event){
        this.setState({
            password : event.target.value
        })
        //console.log(event.target.value)
    }
}

export default TodoApp;