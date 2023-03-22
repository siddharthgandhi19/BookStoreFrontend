import React, { useState } from "react";
import '../SignUp/SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SignUpApi } from "../../Services/UserService";


const nameRegex =/^[A-Za-z]+(?:[.'\-\s]?[A-Za-z]+)*$/
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^([0-9]*).{10}$/;

function SignUp() {

    const [userSignUp, setUserSignup] = useState({
        fullname:"",
        email:"",
        password:"",
        mobile:""
    })

    const [regexSignup, setRegexSignup] = useState({
        fullnameErrorBorder:false,
        fullnameHelperText:"",

        emailErrorBorder:false,
        emailHelperText:"",

        passwordErrorBorder:false,
        passwordHelperText:"",

        mobileErrorBorder:false,
        mobileHelperText:"",
    })

    const inputFullName =(event)=>{
        console.log(event.target.value)
        setUserSignup(prevState=>({ ...prevState, fullname: event.target.value }))
    }

    const inputEmail =(event)=>{
        console.log(event.target.value)
        setUserSignup(prevState=>({ ...prevState, email: event.target.value }))
    }

    const inputPassword =(event)=>{
        console.log(event.target.value)
        setUserSignup(prevState=>({ ...prevState, password: event.target.value }))
    }
    const inputMobile =(event)=>{
        console.log(event.target.value)
        setUserSignup(prevState=>({ ...prevState, mobile: event.target.value }))
    }

    const SubmitSignup = ()=>{
        let fullnameTest = nameRegex.test(userSignUp.fullname)
        let emailTest = emailRegex.test(userSignUp.email)
        let passwordTest = passwordRegex.test(userSignUp.password)
        let mobileTest = mobileRegex.test(userSignUp.mobile)
        console.log(fullnameTest)
        console.log(emailTest)
        console.log(passwordTest)
        console.log(mobileTest)


        if (fullnameTest === false) {
            setRegexSignup(prevState => ({ ...prevState, fullnameErrorBorder:true, fullnameHelperText: 'First Letter Must Capital' }))
        }
        else if (fullnameTest === true) {
            setRegexSignup(preState => ({ ...preState, fullnameErrorBorder: false, fullnameHelperText: '' }))
        }

        if (emailTest === false) {
            setRegexSignup(prevState => ({ ...prevState,  emailErrorBorder: true, emailHelperText: 'Enter Email in Correct Format' }))
        }
        else if (emailTest === true) {
            setRegexSignup(prevState => ({ ...prevState, emailErrorBorder: false, emailHelperText: '' }))
        }

        if (passwordTest === false) {
            setRegexSignup(prevState => ({ ...prevState,   passwordErrorBorder:true,  passwordHelperText:" mix of letters, numbers & symbols" }))
        }
        else if (passwordTest === true) {
            setRegexSignup(prevState => ({ ...prevState, passwordErrorBorder: false, passwordHelperText: '' }))
        }

        if (mobileTest === false) {
            setRegexSignup(prevState => ({ ...prevState,   mobileErrorBorder:true,  mobileHelperText:"Its 10 digit"}))
        }
        else if (mobileTest === true) {
            setRegexSignup(prevState => ({ ...prevState,  mobileErrorBorder:false,  mobileHelperText:"" }))
        }

        if(regexSignup.fullnameErrorBorder === false && regexSignup.emailErrorBorder === false && regexSignup.passwordErrorBorder === false && regexSignup.mobileErrorBorder === false ){
            SignUpApi(userSignUp)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <>
        <div className="SignUpMainContainer">
        <div className="SignUpFullName">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Full Name</div>
            <TextField 
                onChange={inputFullName}
                error={regexSignup.fullnameErrorBorder}
                helperText={regexSignup.fullnameHelperText}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            </div>
            <div className="SignUpEmail">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
            <TextField
             onChange={inputEmail}
             error={regexSignup.emailErrorBorder}
             helperText={regexSignup.emailHelperText}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            </div>
            <div className="SignUpPassword">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
            <TextField 
             onChange={inputPassword}
             error={regexSignup.passwordErrorBorder}
             helperText={regexSignup.passwordHelperText}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            </div>
            <div className="SignUpMobile">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Mobile</div>
            <TextField 
            onChange={inputMobile}
            error={regexSignup.mobileErrorBorder}
            helperText={regexSignup.mobileHelperText}
            id="outlined-basic" variant="outlined" size="small" style={{width:'18vw'}}/>
            </div>
            <Button onClick={SubmitSignup} className="SignUpButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}>
                    SignUp
                </Button>
        </div>
        </>
    )
}
export default SignUp;