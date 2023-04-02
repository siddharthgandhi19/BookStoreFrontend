import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import '../WishList/WishList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteFromWishListApi, GetAllWishlistApi } from '../../Services/DataService';


function WishList() {

    const [wishlistArray, setWishlistArray] = useState([])

    useEffect(() => {
        GetAllWishlistApi()
            .then((response) => {
                console.log(response)
                setWishlistArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }, [])

    const deleteWishlist = (wishListId) => {
        DeleteFromWishListApi(wishListId)
        .then((response) => {
            console.log(response)
        }).catch((error) => { console.log(error) })
    }

    
    let navigate = useNavigate()
    const navigateToDashboard = () => {
        navigate('/dashboard')
    }

    return (
        <div>
            <div className="MaincontainerWishlist">
                <Header />

                <div className="MiddleSectionWishlist">
                    <div className="EmptyboxMiddleSectionWishlist"> </div>
                    <div  onClick={navigateToDashboard}  style={{ cursor: 'pointer' }} className="HomeWish">
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

                            {
                                wishlistArray.map((wishlist) => (
                                    <div className="BookDetailsWishlist1">
                                        <div className="imageWishlist">
                                       <img className="imageWishlistSize" src= {wishlist.bookImage} alt="" />
                                        </div>
                                        <div className="BookDataInWishlist">
                                            <div className="BookNameWishlist">
                                                {/* Don't Make Me Think */}
                                                {wishlist.bookName}

                                            </div>
                                            <div className="AuthorNameWishlist">
                                                {/* by Steve Krug */}
                                                {wishlist.authorName}

                                            </div>
                                            <div className="PriceWishlist">
                                                <div className="OriginalPriceWishlist">
                                                    {/* Rs. 1500 */}
                                                    Rs. {wishlist.originalPrice}
                                                </div>
                                                <div className="DiscountPriceWishlist">
                                                    {/* Rs. 2000 */}
                                                     Rs.   {wishlist.discountPrice}
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>deleteWishlist(wishlist.wishListId)} style={{ cursor: 'pointer',color: '#9D9D9D' }} className="DeleteIconWishlist">
                                            <DeleteIcon />
                                        </div>
                                    </div>

                                ))
                            }





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList
