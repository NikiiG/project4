import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-11 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <h2> My Orders</h2>
          <br></br>
        </div>
        <div align="right">
          <a href="/">Continue Shopping</a>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="row">
          <div className="col">
            <OrderList
              orders={orders}
              activeOrder={activeOrder}
              setActiveOrder={setActiveOrder}
            />
          </div>
          {/* Render the existing OrderDetail component */}
          <div className="col">
            <OrderDetail order={activeOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}
