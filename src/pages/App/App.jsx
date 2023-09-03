import { useState } from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import 'bootstrap/dist/js/bootstrap.bundle';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
  <>
      <NavBar user={user} setUser={setUser} />
        
            <Routes>
              
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/login" element={<LoginForm setUser={setUser}/>} />
              <Route path="/createuser" element={<SignUpForm setUser={setUser} />} />
              <Route path="/*" element={<Navigate to="/" />} />
            
         
            </Routes>
           
      
      <Footer/>
      </>
  );
}
