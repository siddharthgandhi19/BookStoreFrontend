import React from 'react'
import '../BookCatalogue/BookCatalogue.css'
import StarIcon from '@mui/icons-material/Star';

function BookCatalogue(props) {
    return (
        <>
            <div className="BookCatalogueMainContainer">
                <div className="BookImage">
                    <img className='imageBook' src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A2fc5cbdd-6739-4109-8fe3-577ff0ceef47&params=version%3A0&token=1679718493_da39a3ee_43de59a6449430a8428d14e6632d3420f7fc3a2e&api_key=CometServer1" alt="" />
                </div>
                <div className="BookDetail">
                    <div className="BookTitle">
                    {/* Don't Make Me Think */} {props.book.bookName}
                    </div>
                    <div className="AuthorName">
                    {/* by Steve Krug */}  {props.book.authorName}
                    </div>
                    <div className="BookRatingCount">
                        <div className="BookRating">{props.book.rating} <StarIcon style={{fontSize:'small', color:'#ffffff'}}/></div>
                        <div className="BookCount">{props.book.bookCount}</div>
                    </div>
                    <div className="Price">
                        <div className="DiscountPrice">Rs. {props.book.discountPrice}</div>
                        <div className="OriginalPrice">Rs. {props.book.originalPrice}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCatalogue