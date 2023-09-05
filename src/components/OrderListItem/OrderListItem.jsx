export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  return (
    <tr
      className={`OrderListItem ${order === activeOrder ? "table-active" : ""}`}
      onClick={() => setActiveOrder(order)}
    >
      <td>{order.orderId}</td>
      <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
      <td>
        {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
      </td>
      <td>${order.orderTotal.toFixed(2)}</td>
    </tr>
  );
}
