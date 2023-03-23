import React, { useState } from "react";
import './ForgotPasswordPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ForgotApi } from "../../Services/UserService";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function ForgotPassword() {


    let navigate = useNavigate()

    const [emailVerify,setEmailVerify]=useState({

        email:""

    })

    const [regexObj, setRegexObj] = useState({
        emailBorder: false,
        emailHelper: "",
    })

    const takeEmail =(event)=>{
        console.log(event.target.value)
        setEmailVerify(prevState=>({...prevState, email:event.target.value}))
    }
    const SubmitResetPassword=()=>{
        console.log(emailVerify)
        let emailTest = emailRegex.test(emailVerify.email)
        console.log(emailTest)

        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Couldnt find your Bookstore Account' }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }

        if (emailTest === true){
            ForgotApi(emailVerify)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        navigate('/resetpassword')
        }
    }

     const navigateToSignup = () =>{
        navigate('/')
     }

    return (
        <>
            <div className="ForgotPasswordMainContainer">
                <div className="HeaderForgotPassword">
                    <div className="BookStoreLogoForgotPage">
                        <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aa5b33713-5c6d-45cb-8c64-81e6721d4f29&params=version%3A0&token=1679546769_da39a3ee_9ad95e5baef04978f6acef7ca2b00baa916aee2e&api_key=CometServer1" alt="" />
                    </div>
                    <div className="TextBookStore">
                        Bookstore
                    </div>
                </div>
                <div className="MiddleForgotPage">
                    <div className="HeaderMiddleForgotPage">
                        Forget Your Password?
                    </div>
                    <div className="MiddleSecMiddleForgotPage">
                        <div className="MiddleSecText">
                            Enter your email address and we'll send you
                            a link to reset your password.
                        </div>
                        <div className="LoginInputForgotPage">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                            <TextField 
                            onChange={takeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}
                            id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>

                        <Button onClick={SubmitResetPassword} className="ResetPasswordButton" size="small" variant="contained" style={{  width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px', marginLeft:'50px' }}>
                            Reset Password
                        </Button>
                    </div>

                    <div onClick={navigateToSignup}  className="CreateAccountForgit">
                       CREATE ACCOUNT
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;