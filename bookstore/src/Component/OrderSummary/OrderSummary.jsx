import React, { useEffect, useState } from 'react'
import '../OrderSummary/OrderSummary.css'
import Header from '../Header/Header'
import { CancelledOrderApi, GetAllOrders } from '../../Services/DataService'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function OrderSummary(props) {  //props for toggle order order details

    const [orderArray, setOrderArray] = useState([])

    const getAllOrders = () => {
        GetAllOrders()
            .then((response) => {
                console.log(response)
                setOrderArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }

    const autoRefresh = () => {
        getAllOrders()
    }

    useEffect(() => {
        getAllOrders()
    }, [])


    let navigate = useNavigate()

    const CheckoutToMyOrders = () => {
        navigate('/order')
    }

    const closeOrder=()=>{
        props.closeOrderDetails()
    }


    return (
        <div>
            <div className="OrderSummary" onClick={closeOrder} >

                <div className="OrderSummaryBox">
                    {
                        orderArray.map((order) => (
                            <div className="OrderSummaryOrderBox1">
                                <div className="imageOrderSummary">
                                    <img className="imageorderSize" src={order.bookImage} alt="" />
                                </div>
                                <div className="BookDataInOrderOrderSummary">
                                    <div className="BookNameOrderOrderSummary">
                                        {/* Don't Make Me Think */}
                                        {order.bookName}
                                    </div>
                                    <div className="AuthorNameOrderOrderSummary">
                                        {/* by Steve Krug */}
                                        {order.authorName}
                                    </div>
                                    <div className="PriceOrder">
                                        <div className="OriginalPriceOrderOrderSummary">
                                            {/* Rs. 1500 */}
                                            Rs. {order.originalPrice}
                                        </div>
                                        <div className="DiscountPriceOrderOrderSummary">
                                            {/* Rs. 2000 */}
                                            Rs.   {order.discountPrice}
                                        </div>
                                    </div>
                                </div>
                                <div className="LasTOrderContainerOrderSummary">


                                </div>
                            </div>

                        ))
                    }

                    <div className="CancelOrderOrderSummary">
                        <Button onClick={CheckoutToMyOrders} style={{ backgroundColor: '#3371B5' }} variant="contained">Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
