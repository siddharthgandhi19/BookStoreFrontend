import React, { useState } from 'react';
import Login from '../../Component/Login/Login';
import SignUp from '../../Component/SignUp/SignUp';
import '../Lander/Lander.css'

function Lander() {

    const [toggle, setToggle]= useState(true)   

    const openLogin =()=>{
        setToggle(true)
    }

    const openSignup =()=>{
        setToggle(false)
    }
    return (
        <> 
            <div className="body">
                <div className="leftContainer">
                    <img className='leftLanderImage' src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A634ba680-536e-4b6f-b4a3-41986b9b22f5&params=version%3A0&token=1680167780_da39a3ee_fe198e492871a65a01b26b0db59310b313a4edcc&api_key=CometServer1" alt="" />
                    <div className="leftContainerText">
                        ONLINE BOOK SHOPPING
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="header">
                        <div className="leftHeader" onClick={openLogin} style={{ cursor:'pointer' }}>
                            LOGIN
                        </div>
                        <div className="rightHeader" onClick={openSignup} style={{ cursor:'pointer' }}>
                            SIGNUP
                        </div>
                    </div> 
                    <div>
                        {/* <Login/> */}
                        {/* <SignUp/> */}
                        {
                             toggle ? <Login /> : <SignUp />
                        }
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lander;