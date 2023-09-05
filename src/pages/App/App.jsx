import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      {user ? (
        <Routes>
          {/* Route components in here */}
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/" element={<Home user={user} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
          <Route
            path="/createuser"
            element={<SignUpForm setUser={setUser} />}
          />
        </Routes>
      )}

      <Footer />
    </>
  );
}
