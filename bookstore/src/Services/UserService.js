import axios from 'axios'

export const LoginApi = (loginObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44310/api/User/UserLogin',loginObj)
    console.log("after")
    return response
}

export const SignUpApi = (signupObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44310/api/User/UserRegistration',signupObj)
    console.log("after")
    return response
}

