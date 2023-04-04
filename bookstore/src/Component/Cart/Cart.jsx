import React, { useEffect, useState } from 'react'
import '../Cart/Cart.css'
import Header from '../Header/Header'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Paper } from '@mui/material'
import { GetAllCartApi, OrderPlacedApi, RemoveFromCartApi } from '../../Services/DataService';
import { useNavigate } from 'react-router-dom';
import Address from '../Address/Address';
import Order from '../Order/Order';
import OrderSummary from '../OrderSummary/OrderSummary';


function Cart() {

    const [cartArray, setCartArray] = useState([])


    const getAllCart = () => {
        GetAllCartApi()
            .then((response) => {
                console.log(response)
                setCartArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }

    const autoRefresh = () => {
        getAllCart()
    }


    useEffect(() => {
        getAllCart()
    }, [])

    let navigate = useNavigate()
    const navigateToDashboard = () => {
        navigate('/dashboard')
    }

    const removeFromCart = (cartId) => {
        console.log(cartId)
        RemoveFromCartApi(cartId)
            .then((response) => {
                console.log(response)
                autoRefresh()
            }).catch((error) => { console.log(error) })
    }

    const orderAdd = { "addressId": 0, "bookId": 0, "totalQuantity": 0 }

    const navToOrder = () => {
        orderAdd.addressId = 2
        orderAdd.bookId = Number(localStorage.getItem("bookId"))
        orderAdd.totalQuantity = 1

        OrderPlacedApi(orderAdd)
            .then((response) => {
                console.log(response)
                localStorage.setItem("orderId", response.data.data)
                navigate('/order')
            })
            .catch((error) => { console.log(error) })
        console.log(" add to cart successful")
    }



    return (
        <div>
            <div className="MainContainerCart">
                <Header />
                <div className="MiddleSectionCart">
                    <div className="EmptyboxMiddleSectionCart"> </div>
                    <div onClick={navigateToDashboard} style={{ cursor: 'pointer' }} className="HomeCart">
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
                            cartArray.map((cart) => (
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
                                        <div onClick={() => removeFromCart(cart.cartId)} style={{ cursor: 'pointer' }} className="RemoveCart">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



                        <div className="cartDetail3">
                            <Button onClick={navToOrder} style={{ backgroundColor: '#3371B5' }} variant="contained">Place Order</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="Addresscall">
                <Address />
            </div>
            <div className="OrderSummart">
           <OrderSummary/>
            </div>
        </div>
    )
}

export default Cart
