import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;
  console.log("uuuuuuuu");
  console.log(order);
  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div>      
      <table className="table">
        <thead>
          <td>Order Id</td>
          <td>Date</td>
          <td>Quantity</td>
          <td>Rate</td>
          <td>Total Price</td>
        </thead>
        <tbody>{lineItems}</tbody>
      </table>

      <div className="row">
        {order.isPaid ? (
          <div className="col"><h3>TOTAL&nbsp;&nbsp;</h3></div>
        ) : (
          <div className="col">
             <button className="btn" type="submit" onClick={handleCheckout}
            disabled={!lineItems.length}>
            CHECKOUT
          </button>
          </div>
        )}        
        <div className="col" align="right"><h3>Total ${order.orderTotal}</h3></div>
      </div>
    </div>
  );
}
