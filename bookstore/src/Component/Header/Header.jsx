import React from 'react';
import '../Header/Header.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';



function Header() {
    return (
        <>
            <div className="HeaderMainContainer">
                <div className="HeaderBookStoreLogo">
                    <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A34a6421f-a569-47b8-bc37-078211517464&params=version%3A0&token=1679892969_da39a3ee_4d727168cad1fad34d16d4d54426edd7edcfda0d&api_key=CometServer1" alt="" />
                </div>
                <div className="HeaderText">
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