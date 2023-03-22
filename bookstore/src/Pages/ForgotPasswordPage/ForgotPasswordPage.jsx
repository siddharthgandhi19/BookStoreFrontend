import React from "react";
import '../ForgotPasswordPage/ForgotPasswordPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ForgotPassword() {
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
                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>

                        <Button className="ResetPasswordButton" size="small" variant="contained" style={{  width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px', marginLeft:'50px' }}>
                            Reset Password
                        </Button>
                    </div>

                    <div className="CreateAccountForgit">
                       CREATE ACCOUNT
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;