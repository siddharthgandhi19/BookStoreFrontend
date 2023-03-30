import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import '../WishList/WishList.css'
import DeleteIcon from '@mui/icons-material/Delete';


function WishList() {


    return (
        <div>
            <div className="MaincontainerWishlist">
                <Header />

                <div className="MiddleSectionWishlist">
                    <div className="EmptyboxMiddleSectionWishlist"> </div>
                    <div style={{ cursor: 'pointer' }} className="HomeWish">
                        Home /
                    </div>
                    <div className="WishlistId">
                        My WishList
                    </div>
                </div>
                <div className="MiddleSectionWishBoxDetails">
                    <div className="EmptyboxMiddleSectionWishlist"> </div>
                    <div className="WishlistDetails">
                        <div className="WishlistDetailsHeader">
                            <div className="myWishlistId">
                                My Wishlist (1)
                            </div>
                        </div>
                        <div className="BookDetailsWishlist">
                            <div className="BookDetailsWishlist1">
                                <div className="imageWishlist">

                                </div>
                                <div className="BookDataInWishlist">
                                <div className="BookNameWishlist">
                                            Don't Make Me Think

                                        </div>
                                        <div className="AuthorNameWishlist">
                                            by Steve Krug

                                        </div>
                                        <div className="PriceWishlist">
                                            <div className="OriginalPriceWishlist">
                                                Rs. 1500
                                            </div>
                                            <div className="DiscountPriceWishlist">
                                                Rs. 2000

                                            </div>
                                        </div>
                                </div>
                                <div className="DeleteIconWishlist">
                                <DeleteIcon/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList
