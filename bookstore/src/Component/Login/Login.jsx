import React, { useState } from 'react';
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {

    const [userDetail, setUserDetail] = useState({

        email: "",
        password: ""

    })

    const [regexObj, setRegexObj] = useState({
        emailBorder: false,
        emailHelper: "",

        passwordBorder: false,
        passwordHelper: ""
    })

    const takeEmail = (event) => {
        console.log(event.target.value)
        setUserDetail(prevState=>({ ...prevState, email: event.target.value }))
    }
    const takePassword = (event) => {
        console.log(event.target.value)
        setUserDetail(prevState => ({ ...prevState, password: event.target.value }))

    }

    const SubmitLogin = () => {
        console.log(userDetail)
        let emailTest = emailRegex.test(userDetail.email)
        let passwordTest = passwordRegex.test(userDetail.password)
        console.log(emailTest)
        console.log(passwordTest)

        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Couldnt find your Bookstore Account' }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }
        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Wrong password. Try again or click Forgot password to reset it' }))
        }
        else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
    }

    return (
        <>
           <div className="LoginMainContainer">
            <div className="LoginInput">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
            <TextField
            onChange={takeEmail}
            error={regexObj.emailBorder}
            helperText={regexObj.emailHelper}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            </div>
            <div className="LoginPassword">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
            <TextField
             onChange={takePassword}
             error={regexObj.passwordBorder}
             helperText={regexObj.passwordHelper}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            <div style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' ,fontSize: '12px', color:'#9D9D9D'}}>Forget Password?</div>
            </div>
            <Button onClick={SubmitLogin} className="LoginButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}>
                    Login
                </Button>

                <div className="OrTextDiv">
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'grey', marginTop: '20px' }}></div>
                    <h4 style={{ marginTop: '5px' }}>OR</h4>
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'grey', marginTop: '20px' }}></div>
                </div>
                <div className="FaceBookGoogleButton">
                    <Button size="small" variant="contained" style={{ textTransform: 'none', fontSize: '12px', marginRight: '0.5vw', width: '8vw', backgroundColor: '#4266B2' }}>
                        FaceBook
                    </Button>
                    <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '12px', width: '8vw', backgroundColor: '#F5F5F5', borderColor: '#E4E4E4', color: '#0A0102' }}>
                        Google
                    </Button>
                </div>
            </div>
           
        </>
    )
}

export default Login;