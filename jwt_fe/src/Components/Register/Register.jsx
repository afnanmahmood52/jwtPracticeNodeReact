import React, {useState} from 'react'
import {JWT_API_URL} from '../../Config/Config'
import Axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successSnackBar, setSuccessSnackBar] = useState(false)
    const [failedSnackbar, setFailedSnackbar] = useState(false)

    const userNameHandler = (event) =>{
        // console.log("userName", event.target.value)
        setUserName(event.target.value)
    }

    const emailHandler = (event) =>{
        // console.log("userName", event.target.value)
        setEmail(event.target.value)
    }

    const passwordHandler = (event) =>{
        // console.log("userName", event.target.value)
        setPassword(event.target.value)
    }

    const resetStates = () =>{
        setUserName('')
        setEmail('')
        setPassword('')
    }

    const closeSuccessSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setSuccessSnackBar(false);
    };

    const closeFailedSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setFailedSnackbar(false);
    };

    const submitHandler = (event) =>{

        const data = {
            user_name: userName,
            email: email,
            password: password,
            role_id:1
        }


        console.log("sumbmit data", data)

        Axios.post(`${JWT_API_URL}/register`,
          data
        )
        .then((response)=>{
            console.log("result", response)
            if(response.data.status === 200){
                setFailedSnackbar(false)
                setSuccessSnackBar(true)
                resetStates()
                return;   
            }
            
            setSuccessSnackBar(false)
            setFailedSnackbar(true)
            resetStates()

        })
        .catch((error)=>{
            console.log("result", error)
            setSuccessSnackBar(false)
            setFailedSnackbar(true)
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
                            <input
                                type="text"
                                className="form-control"
                                id="username-label"
                                value={userName}
                                placeholder="Enter username..."
                                onChange={userNameHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label className="email-label">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email-label"
                                value={email}
                                placeholder="Enter email..."
                                onChange={emailHandler}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="password-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-label"
                                value={password}
                                placeholder="Enter password..."
                                onChange={passwordHandler}
                            />
                        </div>

                        {/* <CircularProgress size={25} thickness={5}/>     */}
                        <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>

                        <button class="btn btn-primary submit-btn" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Submitting
                        </button>

                    </div>
                    <div className="col-sm-2"></div>
                </div>


                <Snackbar open={successSnackBar} autoHideDuration={2000} onClose={closeSuccessSnackbar}>
                    <Alert onClose={closeSuccessSnackbar} severity="success">
                        User registered successfully
                    </Alert>
                </Snackbar>

                <Snackbar open={failedSnackbar} autoHideDuration={2000} onClose={closeFailedSnackbar}>
                    <Alert onClose={closeFailedSnackbar} severity="error">
                        Failed to Sign Up User.
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}
