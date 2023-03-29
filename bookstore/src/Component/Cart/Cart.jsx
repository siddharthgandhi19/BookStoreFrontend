import React, { useEffect, useState } from 'react'
import '../Cart/Cart.css'
import Header from '../Header/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Paper } from '@mui/material'
import { GetAllCartApi } from '../../Services/DataService';


function Cart() {

    const [cartArray, setCartArray] = useState([])

    useEffect(() => {
        GetAllCartApi()
            .then((response) => {
                console.log(response)
                setCartArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }, [])

    return (
        <div>
            <div className="MainContainerCart">
                <Header />
                <div className="MiddleSectionCart">
                    <div className="EmptyboxMiddleSectionCart"> </div>
                    <div style={{ cursor: 'pointer' }} className="HomeCart">
                        Home /
                    </div>
                    <div className="CartId">
                        My Cart
                    </div>
                </div>
                <div className="MiddleSectionCartBoxDetails">
                    <div className="EmptyboxMiddleSectionCart"> </div>
                    <div className="cartDetail">
                        <div className="cartDetail1">
                            <div className="EmptycartDetail1"></div>
                            <div className="myCartTextId">
                                My Cart (1)
                            </div>
                            <LocationOnIcon style={{ color: '#A03037', marginLeft: '5px' }} />
                            <div className="cartDetail1Location">
                                <select className='selectLocation' >
                                    <option value="Use current location"> Use current location</option>

                                </select>
                            </div>
                        </div>



                       {
                            cartArray.map((cart)=>(
                                <div className="cartDetail2">
                                <div className="cartDetail2Image">
                                    <img className='cartDetail2ImageSize' alt="" />
                                </div>
                                <div className="BookDetailsCart">
                                    <div className="BookNameCart">
                                        Don't Make Me Think
    
                                    </div>
                                    <div className="AuthorNameCart">
                                        by Steve Krug
    
                                    </div>
                                    <div className="PriceCart">
                                        <div className="OriginalPriceCart">
                                            Rs. 1500
                                        </div>
                                        <div className="DiscountPriceCart">
                                            Rs. 2000
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                       }



                        <div className="cartDetail3">
                            <Button style={{ backgroundColor: '#3371B5' }} variant="contained">Place Order</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
