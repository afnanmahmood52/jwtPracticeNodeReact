import React, {useState} from 'react'
import {JWT_API_URL} from '../../../Config/Config'
import Axios from 'axios'

const URL = 'http://192.168.10.12:5500'

export default function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setsuccessMessage] = useState(false)
    const [failedMessage, setfailedMessage] = useState(false)

    const userNameHandler = (event) =>{
        console.log("userName", event.target.value)
        setUserName(event.target.value)
    }

    const emailHandler = (event) =>{
        console.log("userName", event.target.value)
        setEmail(event.target.value)
    }

    const passwordHandler = (event) =>{
        console.log("userName", event.target.value)
        setPassword(event.target.value)
    }

    const resetStates = () =>{
        setUserName(null)
        setEmail(null)
        setPassword(null)
    }

    const submitHandler = (event) =>{

        const data = {
            username: userName,
            email: email,
            password: password,
            role_id:1
        }


        console.log("sumbmit data", data)

        Axios.post(`${URL}/register`,
          data
        )
        .then((response)=>{
            console.log("result", response)
            if(response.data.status == 200){
                setfailedMessage(false)
                setsuccessMessage(true)
            }
            else{
                setsuccessMessage(false)
                setfailedMessage(true)
                
            }
                
        })
        .catch((error)=>{
            console.log("result", error)
            setsuccessMessage(false)
            setfailedMessage(true)
        })

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
                            <label className="email-label">Email:</label>
                            <input type="text" className="form-control" id="email-label" placeholder="Enter email..." onChange={emailHandler}/>
                        </div>
                        
                        <div className="form-group">
                            <label className="password-label">Password:</label>
                            <input type="password" className="form-control" id="password-label" placeholder="Enter password..." onChange={passwordHandler}/>
                        </div>

                        <button type="button" class="btn btn-primary" onClick={submitHandler}>Submit</button>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        {
                            successMessage ?
                            <p>User Registered Successfully</p>
                            : null
                        }
                        {
                            failedMessage ?
                            <p>failed to Sign Up User!!!!</p>
                            : null
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}
