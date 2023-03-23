import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}

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

export const ForgotApi = (emaildata) => {
    console.log("before",emaildata)
    const response = axios.post('https://localhost:44310/api/User/ForgotPassword',emaildata)
    console.log("after")
    return response
}
export const ResetApi = (passdata) => {
    console.log("before")
    const response = axios.put('https://localhost:44310/api/User/ResetPassword',passdata,HeaderConfig)
    console.log("after")
    return response
}
