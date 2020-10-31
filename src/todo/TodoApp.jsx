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
            password : '',
            hasLoginFailed:false,
            showSuccessMessage:false
        }

        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);.
        this.handleChanges = this.handleChanges.bind(this);

        this.loginClicked = this.loginClicked.bind(this);
    }
    
    render(){
        return(
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                <ShowSuccessfull showSuccessMessage={this.state.showSuccessMessage}></ShowSuccessfull>
                User Name : <input type="text" name="username" value={this.state.username} onChange={/*this.handleUsernameChange*/this.handleChanges}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={/*this.handlePasswordChange*/this.handleChanges}></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked(){
        if(this.state.username ==='SampleMe' && this.state.password ==='dummy'){
            console.log("Success")
            this.setState({
                showSuccessMessage:true,
                hasLoginFailed:false
            })
        }else{
        
            console.log("Failed")
            this.setState({
                hasLoginFailed:true,
                showSuccessMessage:false
            })
        
        }

    }

    // handleUsernameChange(event){
    //     this.setState({
    //         username : event.target.value
    //     })
    //     //console.log(event.target.value)
    // }

    // handlePasswordChange(event){
    //     this.setState({
    //         password : event.target.value
    //     })
    //     //console.log(event.target.value)
    // }
    handleChanges(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed)
        return <div>Invalid Credentials</div>
    else
        return null
}
function ShowSuccessfull(props){
    if(props.showSuccessMessage)
        return <div>Login Successfull</div>
    else
        return null
}
export default TodoApp;