import React, { useState } from 'react';
import Login from '../../Component/Login/Login';
import SignUp from '../../Component/SignUp/SignUp';
import '../Lander/Lander.css'
import image1 from '../../Component/Images/Shopping.png'

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
                    <img className='leftLanderImage' src={image1} alt="" />
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