import React from "react";
import { useState, useEffect, useRef } from "react";
import * as pizzasAPI from "../../utilities/pizzas-api";
import * as ordersAPI from "../../utilities/orders-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import PizzaList from "../../components/PizzaList/PizzaList";
import { Link, useNavigate } from 'react-router-dom';

export default function Home({ user }) {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const [activeCat, setActiveCat] = useState("");
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const pizzas = await pizzasAPI.getAll();
      categoriesRef.current = [
        ...new Set(pizzas.map((pizza) => pizza.category.name)),
      ];
      setPizzaItems(pizzas);
      setActiveCat('All');
    }

    getItems();
  }, []);
  
  async function handleAddToOrder(itemId, quantity, rate) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    var updatedCart = await ordersAPI.addItemToCart(itemId);
    updatedCart = await ordersAPI.setItemQtyInCart(itemId, quantity, rate);

    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
    navigate("/cart");
  }

  async function handleChangeQty(itemId, newQty, rate) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty, rate);
    setCart(updatedCart);
  }

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important", filter: "brightness(85%)" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className=" carousel-caption" style={{ zIndex: "9" }}>
            <div className="d-flex justify-content-center">
              <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/943449226/photo/concept-promotional-flyer-and-poster-for-restaurants-or-pizzerias-template-with-delicious.jpg?s=612x612&w=0&k=20&c=Vx0Y5mSc6I3H-viPOgFlf-SKY3Uj-kAVbmY_S6Jl1So="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?s=612x612&w=0&k=20&c=VjDdBc_WrHh9dqI8jCSEoI1jeWQDVSdXOJJ5LijQoRA="
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      { activeCat === 'All' ? (
          <>
        <PizzaList
          pizzas={pizzaItems}
          handleAddToOrder={handleAddToOrder}
          handleChangeQty={handleChangeQty}
          user={user}
        />
        </> )
          : (
            <PizzaList
            pizzas={pizzaItems.filter(
              (pizza) => pizza.category.name === activeCat
            )}
            handleAddToOrder={handleAddToOrder}
            user={user}
          />
          )}
          </div>
  );
}
