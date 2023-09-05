import Pizza from '../Pizza/Pizza';

export default function MenuList({ pizzas, handleAddToOrder, handleChangeQty, user}) {
  const pizzaList = pizzas.map(pizza =>
    <div className="col-md-3 m-3">
      <Pizza
      key={pizza._id}
      pizza={pizza}
      handleAddToOrder={handleAddToOrder}
      handleChangeQty={handleChangeQty}
      user={user}
    />
    </div>
  );
  return (
    <div className="row justify-content-center">    
    {pizzaList}
    </div>        
  );
}