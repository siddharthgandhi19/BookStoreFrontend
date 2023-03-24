import React from 'react'
import '../BookCatalogue/BookCatalogue.css'

function BookCatalogue() {
    return (
        <>
            <div className="BookCatalogueMainContainer">
                <div className="BookImage">
                    <img className='imageBook' src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A2fc5cbdd-6739-4109-8fe3-577ff0ceef47&params=version%3A0&token=1679718493_da39a3ee_43de59a6449430a8428d14e6632d3420f7fc3a2e&api_key=CometServer1" alt="" />
                </div>
                <div className="BookDetail">
                    <div className="BookTitle">
                    Don't Make Me Think
                    </div>
                    <div className="AuthorName">
                    by Steve Krug
                    </div>
                    <div className="BookRatingCount">
                        <div className="BookRating">4.9</div>
                        <div className="BookCount">(20)</div>
                    </div>
                    <div className="Price">
                        <div className="DiscountPrice">Rs. 1500</div>
                        <div className="OriginalPrice">Rs. 2000</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCatalogue