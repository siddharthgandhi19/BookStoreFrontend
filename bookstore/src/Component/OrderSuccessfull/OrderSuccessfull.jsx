import React from 'react'
import '../OrderSuccessfull/OrderSuccessfull.css'
import Header from '../Header/Header'
import { Button } from '@mui/material'


function OrderSuccessfull() {
    return (
        <div>
            <div className="MainContainer">
                <Header />
                <div className="MiddleSectionOrder">
                    <div className="OrderMessage">
                        Order Placed Successfully
                    </div>
                    <div className="OrderSucessfullMessge">
                        hurray!!! your order is confirmed
                        the order id is #123456 save the order id for further communication..
                    </div>
                    <div className="informationOrder">
                        <div className="HeaderOrder">
                            <div className="Email">
                                Email us
                            </div>
                            <div className="Contact">
                            Contact us
                            </div>
                            <div className="Address">
                            Address
                            </div>
                        </div>
                        <div className="HeaderOrderTwo">
                            <div className="EmailAddress">
                            admin@bookstore.com
                            </div>
                            <div className="ContactDeatils">
                            +91 8163475881
                            </div>
                            <div className="AddressDetails">
                            42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                            </div>
                        </div>
                    </div>
                    <Button  size="small" variant="contained" style={{ width: '18vw', backgroundColor: '#3371B5', textTransform: 'none', fontSize: '17px' }} > CONTINUE SHOPPING</Button>
                

                </div>
            </div>
        </div>
    )
}

export default OrderSuccessfull
