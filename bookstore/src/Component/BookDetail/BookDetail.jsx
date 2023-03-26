import React from 'react'
import Header from '../Header/Header'
import '../BookDetail/BookDetail.css'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';

function BookDetail() {
    return (
        <div>
            <div className="MainContainerBookDetail">
                <Header />
                <div className="MiddleSectionBookDetail">
                    <div className="HeaderMiddleSectionBookDetail">
                        <div className="Home">
                            Home /
                        </div>
                        <div className="BookId">
                            Book(01)
                        </div>
                    </div>
                    <div className="BookDescriptionBookDetail">
                        <div className="LeftContainerBookDetail">
                            <div className="ImageBoxBookDetail">
                                <img src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Afa1b9dc7-e2f6-44ed-82bc-71300cffd920&params=version%3A0&token=1679892969_da39a3ee_4d727168cad1fad34d16d4d54426edd7edcfda0d&api_key=CometServer1" alt="" />
                            </div>
                            <div className="ImageBottomButtonBookDetail">
                                <Button size="small" variant="contained" style={{ width: '25vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px' }}>
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
                                    Don't Make Me Think
                                </div>
                                <div className="AuthorNameBookDetail">
                                    by Steve Krug
                                </div>
                                <div className="BookRatingCountBookDetail">
                                    <div className="BookRatingBookDetail">4.5 <StarIcon style={{ fontSize: 'small', color: '#ffffff' }} /></div>
                                    <div className="BookCountBookDetail">(20)</div>
                                </div>
                                <div className="PriceBookDetail">
                                    <div className="DiscountPriceBookDetail">Rs. 1500 </div>
                                    <div className="OriginalPriceBookDetail">Rs. 2000 </div>
                                </div>
                            </div>

                            <div style={{ width: '40vw', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                            <div className="BookDescription">
                                <div className="titleBookDescription">
                                    Book Details
                                </div>
                                <div className="descriptionBookDescription">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined
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
