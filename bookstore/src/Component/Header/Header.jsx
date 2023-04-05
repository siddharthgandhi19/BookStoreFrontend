import React from 'react';
import '../Header/Header.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';
import image3 from '../Images/Book.png'


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
                    <img width="100%" height="100%" src={image3} alt="" />
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