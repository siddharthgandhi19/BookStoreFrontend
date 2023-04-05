import React, { useEffect, useState } from 'react'
import '../Order/Order.css'
import Header from '../Header/Header'
import { CancelledOrderApi, GetAllOrders } from '../../Services/DataService'
import { Button } from '@mui/material'

function Order() {

    const [orderArray, setOrderArray] = useState([])

    const getAllOrders = ()=>{
        GetAllOrders()
        .then((response) => {
            console.log(response)
            setOrderArray(response.data.data)
        }).catch((error) => { console.log(error) })
       } 

       const autoRefresh = () =>{
        getAllOrders()
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    const cancelledOrder =(orderId)=>{
        console.log(orderId)
            CancelledOrderApi(orderId)
            .then((response) => {
                console.log(response)
                autoRefresh()
            }).catch((error) => { console.log(error) })
        }

        

    return (
        <div>
            <div className="OrderMainContainer">
                <Header />
                <div className="MiddleSectionWishlist">
                    <div className="EmptyboxMiddleSectionWishlist"> </div>
                    <div style={{ cursor: 'pointer' }} className="HomeOrder">
                        Home /
                    </div>
                    <div className="OrderId">
                        My Order
                    </div>
                </div>
                <div className="OrderBox">


                    {
                        orderArray.map((order) => (
                            <div className="OrderBox1">
                                <div className="imageOrder">
                                    <img className="imageorderSize" src={order.bookImage} alt="" />
                                </div>
                                <div className="BookDataInOrder">
                                    <div className="BookNameOrder">
                                        {/* Don't Make Me Think */}
                                        {order.bookName}
                                    </div>
                                    <div className="AuthorNameOrder">
                                        {/* by Steve Krug */}
                                        {order.authorName}
                                    </div>
                                    <div className="PriceOrder">
                                        <div className="OriginalPriceOrder">
                                            {/* Rs. 1500 */}
                                            Rs. {order.originalPrice}
                                        </div>
                                        <div className="DiscountPriceWishlist">
                                            {/* Rs. 2000 */}
                                            Rs.   {order.discountPrice}
                                        </div>
                                    </div>
                                </div>
                                    <div className="LasTOrderContainer">
                                    <div className="OrderPlacedDate">
                                Order Placed on {order.orderDate}
                                </div>
                                <div className="CancelOrder">
                                <Button onClick={ ()=>cancelledOrder(order.orderId)} style={{ backgroundColor: '#3371B5' }} variant="contained">Cancel Order</Button>
                                    </div>
                                
                            </div>
                            </div>
                            
                        ))
                    }
                            
                </div>
            </div>
        </div>
    )
}

export default Order
