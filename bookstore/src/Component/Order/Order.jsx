import React from 'react'
import '../Order/Order.css'
import Header from '../Header/Header'

function Order() {
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
                    <div className="OrderBox1">
                        <div className="imageOrder">
                            <img className="imageorderSize" src="" alt="" />
                        </div>
                        <div className="BookDataInOrder">
                            <div className="BookNameOrder">
                                Don't Make Me Think

                            </div>
                            <div className="AuthorNameOrder">
                                by Steve Krug


                            </div>
                            <div className="PriceOrder">
                                <div className="OriginalPriceOrder">
                                    Rs. 1500

                                </div>
                                <div className="DiscountPriceWishlist">
                                    Rs. 2000

                                </div>
                            </div>
                        </div>

                        <div className="OrderPlacedDate">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
