import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders, activeOrder, setActiveOrder }) {
  const orderList = orders.map((order) => (
    <OrderListItem
      order={order}
      activeOrder={activeOrder}
      setActiveOrder={setActiveOrder}
      key={order.id}
    />
  ));

  return (
  <table className="table">
    <thead>
      <td>Order Id</td>
      <td>Date</td>
      <td>Quantity</td>
      <td>Price</td>
    </thead>
    <tbody>{orderList}</tbody>
  </table>);
}
