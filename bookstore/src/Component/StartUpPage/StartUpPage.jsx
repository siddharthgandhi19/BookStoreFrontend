import React from 'react'
import '../../Component/StartUpPage/StartUpPage.css'
import { useNavigate } from 'react-router-dom'
import image2 from '../Images/StartUpPageImage.png'




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
                        <img className='StartUpPageImageSize' src={image2} alt="" />
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
