import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}


export const GetAllBookApi = () => {
    console.log("before")
    const response = axios.get('https://localhost:44310/api/Book/getAllBook',HeaderConfig)
    console.log("after")
    return response
}