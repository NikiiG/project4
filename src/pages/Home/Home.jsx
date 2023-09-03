import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as pizzasAPI from '../../utilities/pizzas-api';
import * as ordersAPI from '../../utilities/orders-api';
import Pizza from '../../components/Pizza/Pizza';


export default function Home() {
    const [pizzaItems, setPizzaItems] = useState([]);
    const [cart, setCart] = useState(null);
    useEffect(function() {
        async function getItems() {
          const pizzas = await pizzasAPI.getAll()
          console.log(pizzas);
        //   categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setPizzaItems(pizzas);
       
        
         
        //   setActiveCat(categoriesRef.current[0]);
        }
       
        getItems();
    
        
      },[]);
      async function handleAddToOrder(itemId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
      }
    
      
     
    return ( 
        
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important",filter: "brightness(85%)"}}>
  <div className="carousel-inner" id='carousel'>
    <div className=" carousel-caption" style={{zIndex:"9"}}>
        
    <div className="d-flex justify-content-center" >
    
  
      <select className="form-control mt-2  " style={{ filter: "brightness(90%)",width:"500px"}}>
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non Veg</option>
                            <option value="beverages">Beverages</option>
                            <option value="desserts">Desserts</option>
                        </select>
                      
      <button className="btn mt-2 m-1" type="submit">Filter</button>  
      
     
   
     
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/943449226/photo/concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious.jpg?s=612x612&w=0&k=20&c=Vx0Y5mSc6I3H-viPOgFlf-SKY3Uj-kAVbmY_S6Jl1So=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?s=612x612&w=0&k=20&c=VjDdBc_WrHh9dqI8jCSEoI1jeWQDVSdXOJJ5LijQoRA=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
</div>
       <div className="row justify-content-center">
            {pizzaItems.map(pizza=>{
    return <div className="col-md-3 m-3"key={pizza._id}>
        <div>
            <Pizza pizza={pizza}  handleAddToOrder={handleAddToOrder}/>
        </div>
        </div>
})}

       </div>
   
    
     </div>
     )
};

