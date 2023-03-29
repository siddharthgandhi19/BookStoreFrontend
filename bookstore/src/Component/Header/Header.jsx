import React from 'react';
import '../Header/Header.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';



function Header() {

    // let navigate = useNavigate()
    // const navToDashboard = ()=>{
    //     navigate('/dashboard')
    // }
    //  onClick={navToDashboard}


    return (
        <>
            <div className="HeaderMainContainer">
                <div style={{cursor: 'pointer'}} className="HeaderBookStoreLogo">
                    <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A4d5d507b-f788-46f6-b62b-030d246bf6d4&params=version%3A0&token=1680167780_da39a3ee_fe198e492871a65a01b26b0db59310b313a4edcc&api_key=CometServer1" alt="" />
                </div>
                <div   style={{cursor: 'pointer'}} className="HeaderText">
                    Bookstore
                </div>
                <div className="middleheader">
                    <div className='iconSearch'><Button> <SearchIcon style={{ color: '#5f6368' }} /> </Button></div>
                    <div className='input'><InputBase placeholder="Search ..." /></div>
                </div>
                <div className="Profile">
                    <Button> <PersonOutlinedIcon  style={{ color: '#ffff' }}/> </Button>
                    <div className="textProfile">
                        Profile
                    </div>
                </div>
                <div className="cart">
                    <Button> <ShoppingCartOutlinedIcon  style={{ color: '#ffff' }}/></Button>
                    <div className="textProfile">
                        Cart
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;