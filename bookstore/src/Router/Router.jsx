import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ForgotPassword from '../Component/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from '../Component/ResetPasswordPage/ResetPasswordPage'
import SignUp from '../Component/SignUp/SignUp'
import StartUpPage from '../Component/StartUpPage/StartUpPage'
import Lander from '../Pages/Lander/Lander'

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path= '/' element ={<StartUpPage/>} />
            <Route path= '/lander' element ={<Lander/>} />
            <Route path='/forgetpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPasswordPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Router1
