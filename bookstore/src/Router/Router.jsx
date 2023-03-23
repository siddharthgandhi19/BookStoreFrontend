import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ForgotPassword from '../Component/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from '../Component/ResetPasswordPage/ResetPasswordPage'
import SignUp from '../Component/SignUp/SignUp'
import Lander from '../Pages/Lander/Lander'

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path= '/' element ={<Lander/>} />
            <Route path='/forgetpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPasswordPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Router1
