import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../StartUpPage/StartUpPage.css'



function StartUpPage() {

    let navigate = useNavigate()

    const navToLander = () => {
        navigate('/lander')
    }

  
    return (
        <div>
            <div className="StartUpPageMainContainer">
                <div className="StartUpPageMiddleSection">
                    <div className="StartUpPageTitle">
                        PLEASE LOG IN
                    </div>
                    <div className="StartUpPageText">
                        Login to view items in your wishlist.
                    </div>
                    <div className="StartUpPageImage">
                        <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A25799239-628e-4a28-9d28-9eaa24c158b2&params=version%3A0&token=1680167780_da39a3ee_fe198e492871a65a01b26b0db59310b313a4edcc&api_key=CometServer1" alt="" />
                    </div>
                    <div onClick={navToLander} style={{ cursor:'pointer' }} className="StartUpPageLoginSignup">
                        LOGIN/SIGNUP
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartUpPage
