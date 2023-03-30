import React, { useEffect, useState } from 'react'
import BookCatalogue from '../../Component/BookCatalogue/BookCatalogue'
import Header from '../../Component/Header/Header'
import { GetAllBookApi } from '../../Services/DataService'
import '../Dashboard/Dashboard.css'
function Dashboard() {

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        GetAllBookApi()
            .then((response) => {
                console.log(response)
                setDataArray(response.data.data)
            })
            .catch((error) => { console.log(error) })
        console.log("All Books Retrived")
    }, [])


    

    return (
        <>
            <div className="MainContainerDashboard">
                <Header />
                <div className="BelowHeaderDasboard">
                    <div className="LeftBelowHeaderDasboard">
                        <div className="TitleLeftBelowHeaderDasboard">
                            Books
                        </div>
                        <div className="CountLeftBelowHeaderDasboard">
                            (128 items)
                        </div>
                    </div>
                    <div className="RightBelowHeaderDasboard">
                        <select className='selectorRightBelowHeaderDasboard' >
                            <option value="sort by relevance">Sort by relevance</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="What's New">What's New</option>
                            <option value="Popularity">Popularity</option>
                            <option value="Better Discount">Better Discount</option>
                            <option value="Customer Rating">Customer Rating</option>
                        </select>
                    </div>
                </div>

                <div className="GetBooks">
                    {
                        dataArray.map((book) => (<BookCatalogue book={book} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
