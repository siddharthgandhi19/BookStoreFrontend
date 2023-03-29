import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const GetAllBookApi = () => {
    console.log("before")
    const response = axios.get('https://localhost:44310/api/Book/getAllBook',HeaderConfig)
    console.log("after")
    return response
}

export const GetBookByIdApi = (bookId) => {
    console.log("before")
    console.log(bookId)
    const response = axios.get(`https://localhost:44310/api/Book/getAllBookById?bookId=${bookId}`,HeaderConfig)
    console.log("after")
    return response
}

export const GetAllCartApi =()=>{
    const response = axios.get('https://localhost:44310/api/Cart/GetCartByUserId',HeaderConfig)
    return response
}
