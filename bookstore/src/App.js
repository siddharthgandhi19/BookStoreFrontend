import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import ForgotPassword from './Component/ForgotPasswordPage/ForgotPasswordPage';
import Lander from './Pages/Lander/Lander';
import ResetPasswordPage from './Component/ResetPasswordPage/ResetPasswordPage';
import Router1 from './Router/Router';
import Header from './Component/Header/Header';
import BookCatalogue from './Component/BookCatalogue/BookCatalogue';
import StartUpPage from './Component/StartUpPage/StartUpPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import BookDetail from './Component/BookDetail/BookDetail';
import Cart from './Component/Cart/Cart';
import WishList from './Component/WishList/WishList';
import OrderSuccessfull from './Component/OrderSuccessfull/OrderSuccessfull';
import Order from './Component/Order/Order';
import Address from './Component/Address/Address';
import OrderSummary from './Component/OrderSummary/OrderSummary';


function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Lander/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPasswordPage/> */}
      <Router1/>
      {/* <Header/> */}
      {/* <BookCatalogue/> */}
      {/* <StartUpPage/> */}
      {/* <Dashboard/> */}
      {/* <BookDetail/> */}
      {/* <Cart /> */}
      {/* <WishList/> */}
      {/* <OrderSuccessfull/> */}
      {/* <Order/> */}
     {/* <Address/> */}
     {/* <OrderSummary/> */}
    </div>
  );
}

export default App;
