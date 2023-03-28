import React from 'react'
import '../BookCatalogue/BookCatalogue.css'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

function BookCatalogue(props) {

    let navigate = useNavigate()

    const openBookDetail=()=>{
        const bookId = props.book.bookId;
        localStorage.setItem("bookId", JSON.stringify(bookId))
        navigate('/bookdetails')
    }


    return (
        <>
            <div onClick={openBookDetail} className="BookCatalogueMainContainer">
                <div className="BookImage">
                    <img  className='imageBook' src={props.book.bookImage}  alt="" />
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
                        <div className="BookCount"> ({props.book.bookCount})</div>
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