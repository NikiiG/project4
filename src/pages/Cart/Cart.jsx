import React from "react";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { useState, useEffect, useRef } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function () {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleChangeQty(itemId, newQty, rate) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty, rate);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-11 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <h2> My Cart</h2>
          <br></br>
        </div>
        <div align="right">
          <a href="/">Continue Shopping</a>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="row">
          <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}
