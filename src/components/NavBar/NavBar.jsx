import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useState } from "react";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate("/");
  }
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded piz">
        <div className="container-fluid mb-6">
          <img
            src="https://media.istockphoto.com/id/1178705635/vector/web.jpg?s=612x612&w=0&k=20&c=E4ednGAGu92EMICMgw6O1DUaH7NGGQwdhd4pYMAXPyg="
            height={90}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {user ? (
                <>
                  <Link className="btn bg-white text-black mx-2" to="/orders">
                    My Orders
                  </Link>
                </>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              {!user ? (
                <>
                  <Link className="btn bg-white text-black mx-1" to="/login">
                    {" "}
                    Login
                  </Link>
                  <Link
                    className="btn bg-white text-black mx-1"
                    to="/createuser"
                  >
                    {" "}
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <div className="text-black m-2">Welcome! {user.name}</div>
                  <Link className="btn bg-white text-black mx-1" to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Link>

                  <Link
                    className="btn bg-white text-black mx-2"
                    to="/"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
