import React, {useState} from 'react'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userNameHandler = (event) =>{
        console.log("userName", event.target.value)
        setUserName(event.target.value)
    }

    const passwordHandler = (event) =>{
        console.log("userName", event.target.value)
        setPassword(event.target.value)
    }

    const submitHandler = (event) =>{

        const emailId = email;
        const data = {
            userName: userName,
            password: password
        }

        console.log("sumbmit data", data)
    }


    return (
        <div className="Registration Form">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="login-heading">
                            <h1>Register Yourself</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label className="username-label">UserName:</label>
                            <input type="text" className="form-control" id="username-label" placeholder="Enter username..." onChange={userNameHandler}/>
                        </div>
                        <div className="form-group">
                            <label className="password-label">Password:</label>
                            <input type="password" className="form-control" id="password-label" placeholder="Enter password..." onChange={passwordHandler}/>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={submitHandler}>LOGIN</button>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    )
}
