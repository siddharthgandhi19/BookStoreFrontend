import React, { useState } from 'react'
import '../ResetPasswordPage/ResetPasswordPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ResetApi } from '../../Services/UserService';
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;



function ResetPasswordPage() {

    const [passwordVerify, setPasswordVerify] = useState({
        password: "",
        confirmPassword: ""
    })

    const takePassword = (event) => {
        console.log(event.target.value)
        setPasswordVerify(prevState => ({ ...prevState, password: event.target.value }))
    }
    const takeConfirmPassword = (event) => {
        console.log(event.target.value)
        setPasswordVerify(prevState => ({ ...prevState, confirmPassword: event.target.value }))

    }

    const [regexObj, setRegexObj] = useState({
        passwordBorder: false,
        passwordHelper: "",

        confirmPasswordBorder: true,
        confirmPasswordHelper: ""
    })

    const updatePassword = () => {
        let passwordTest = passwordRegex.test(passwordVerify.password)
        let confirmPasswordTest = passwordRegex.test(passwordVerify.confirmPassword)

        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Recheck the password' }))
        }
        else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }


        if (confirmPasswordTest === false) {
            setRegexObj(prevState => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelper: 'Recheck the password' }))
        }
        else if (confirmPasswordTest === true) {
            setRegexObj(prevState => ({ ...prevState, confirmPasswordBorder: false, confirmPasswordHelper: '' }))
        }


        if (passwordTest === true && confirmPasswordTest === true) {
            ResetApi(passwordVerify)
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
            <div className="ResetPasswordMainContainer">
                <div className="HeaderForgotPassword">
                    <div className="BookStoreLogoForgotPage">
                        <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aa5b33713-5c6d-45cb-8c64-81e6721d4f29&params=version%3A0&token=1679546769_da39a3ee_9ad95e5baef04978f6acef7ca2b00baa916aee2e&api_key=CometServer1" alt="" />
                    </div>
                    <div className="TextBookStore">
                        Bookstore
                    </div>
                </div>
                <div className="MiddleResetPage">
                    <div className="HeaderMiddleForgotPage">
                        Reset Your Password?
                    </div>
                    <div className="MiddleSecMiddleForgotPage">

                        <div className="LoginInputForgotPage">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                            <TextField
                                onChange={takePassword}
                                error={regexObj.passwordBorder}
                                helperText={regexObj.passwordHelper}
                                id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>
                        <div className="LoginInputForgotPage">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Confirm Password</div>
                            <TextField
                                onChange={takeConfirmPassword}
                                error={regexObj.confirmPasswordBorder}
                                helperText={regexObj.confirmPasswordHelper}
                                id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>

                        <Button onClick={updatePassword} className="ResetPasswordButton" size="small" variant="contained" style={{ width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px', marginLeft: '50px' }}>
                            Update Password
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResetPasswordPage
