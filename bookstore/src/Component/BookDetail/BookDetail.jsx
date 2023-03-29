import React, { useEffect, useState} from 'react'
import Header from '../Header/Header'
import '../BookDetail/BookDetail.css'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { AddToCartApi, GetBookByIdApi } from '../../Services/DataService';
import { useNavigate } from 'react-router-dom';

function BookDetail() {

    const [bookDetail, setBookDetail] = useState([])
  
    const bookId = JSON.parse(localStorage.getItem("bookId"));
    console.log(bookId)
    
    useEffect(() => {
        GetBookByIdApi(bookId)
            .then((response) => {
                console.log(response)
                setBookDetail(response.data.data)
            })
            .catch((error) => { console.log(error) })
    }, [])


    let navigate = useNavigate()
    const navigateToDashboard =()=>{
        navigate('/dashboard')
    }

    const listenToCart = ()=>{
        navigate('/cart')
    }
    
    return (
        <div>
            <div className="MainContainerBookDetail">
                <Header />
                <div className="MiddleSectionBookDetail">
                    <div className="HeaderMiddleSectionBookDetail">
                        <div onClick={navigateToDashboard} style={{cursor: 'pointer'}} className="Home">
                            Home /
                        </div>
                        <div className="BookId">
                            Book({bookDetail.bookId})
                        </div>
                    </div>
                    <div className="BookDescriptionBookDetail">
                        <div className="LeftContainerBookDetail">
                            <div className="ImageBoxBookDetail">
                                <img style={{ width: '80%', height:'80%'}} src={bookDetail.bookImage} alt="" />
                            </div>
                            <div className="ImageBottomButtonBookDetail">
                                <Button onClick={listenToCart} size="small" variant="contained" style={{ width: '25vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px' }}>
                                    ADD TO BAG
                                </Button>
                                <Button size="small" variant="contained" style={{ width: '25vw', backgroundColor: '#333333', textTransform: 'none', fontSize: '17px', marginLeft: '20px' }}>
                                    <FavoriteIcon size="small" style={{ marginRight: '20px' }} />  WISHLIST
                                </Button>
                            </div>
                        </div>
                        <div className="MiddleEmptyBox"></div>
                        <div className="RightContainerBookDetail">
                            <div className="BookDetails">
                                <div className="TitleBookDetail">
                                    {/* Don't Make Me Think */}
                                {bookDetail.bookName}
                                </div>
                                <div className="AuthorNameBookDetail">
                                    {/* by Steve Krug */}
                                    {bookDetail.authorName}
                                </div>
                                <div className="BookRatingCountBookDetail">
                                    <div className="BookRatingBookDetail">{bookDetail.rating} <StarIcon style={{ fontSize: 'small', color: '#ffffff' }} /></div>
                                    <div className="BookCountBookDetail">({bookDetail.bookCount})</div>
                                </div>
                                <div className="PriceBookDetail">
                                    <div className="DiscountPriceBookDetail">Rs. {bookDetail.discountPrice} </div>
                                    <div className="OriginalPriceBookDetail">Rs. {bookDetail.originalPrice} </div>
                                </div>
                            </div>

                            <div style={{ width: '40vw', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                            <div className="BookDescription">
                                <div className="titleBookDescription">
                                    Book Details
                                </div>
                                <div className="descriptionBookDescription">
                                {bookDetail.description}
                                </div>
                            </div>
                            <div style={{ width: '40vw', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                            <div className="UserFeedback">
                                <div className="titleUserFeedback">
                                    Customer Feedback
                                </div>
                                <div className="overallRatingUserFeedback">
                                    <div className="titleoverallRatingUserFeedback">
                                        Overall Rating
                                    </div>
                                    <div className="customerRatingStar">
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" />
                                        </Stack>
                                    </div>
                                    <div className="writeReview" >
                                    <div className='inputwriteReview'><InputBase placeholder="Write your review" /></div>
                                    <Button size="small" variant="contained" style={{ width: '6vw', backgroundColor: '#3371B5', textTransform: 'none', fontSize: '14px', marginTop: '60px', marginLeft:'400px' }}>
                                    Submit
                                </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookDetail
