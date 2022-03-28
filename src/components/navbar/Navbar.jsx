import navbar from "./navbar.module.css";
import { Carousel } from "components";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserData } from "hooks/context/userDataContext";

export const Navbar = ({ isHome }) => {
  useEffect(() => {
    setIsHamburgerView(true);
  }, []);

  const [isHamburgerView, setIsHamburgerView] = useState(true);
  const { userData, userDataDispatch, isAuth } = useUserData();

  return (
    <header className="home-head">
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>

      <nav
        className={`nav-head ${
          isHome ? navbar["nav-head-home"] : navbar["nav-head"]
        }`}
      >
        <div className={`${navbar["nav-logo-div"]} flex-row spc-btwn`}>
          <Link className={navbar["logo"]} to="/">
            <h2 className="mg-xs">Hallo!Decor</h2>
          </Link>
          <div className="menu-btn mg-xs hamburger-icon mg-left-auto">
            <i
              className="fas fa-bars"
              onClick={() => {
                setIsHamburgerView((prev) => !prev);
              }}
            ></i>
          </div>
        </div>

        <div className="navBlock">
          <ul
            className={`nav-links ${
              !isHamburgerView ? "nav-links-hidden" : ""
            }`}
          >
            <li className="search search-box">
              <input
                type="search"
                placeholder="Search"
                className="search-bar"
              />
              <button className="search-btn">
                <img
                  src="/assets/icons/search.svg"
                  alt="search icon"
                  className="search-icon"
                />
              </button>
            </li>

            <li>
              <Link className={` ${navbar["nav-link"]}`} to="/profile">
                <img
                  src="/assets/icons/profile.svg"
                  alt="Profile icon"
                  className="nav-icon"
                />
                Profile
              </Link>
            </li>

            <li>
              <Link className={` ${navbar["nav-link"]}`} to="/wishlist">
                <img
                  src="/assets/icons/heartFilled.svg"
                  alt="heart icon"
                  className="nav-icon"
                />
                Wishlist
              </Link>
            </li>

            <li>
              <Link className={` ${navbar["nav-link"]}`} to="/cart">
                <img
                  src="/assets/icons/cart.svg"
                  alt="cart icon"
                  className="nav-icon"
                />
                Cart
              </Link>
            </li>
            <li>
              {isAuth() ? (
                <Link
                  to="/"
                  className={` ${navbar["nav-link"]} ${navbar["logout-btn"]}`}
                  onClick={() => {
                    userDataDispatch({ type: "LOGOUT" });
                  }}
                >
                  Log out
                </Link>
              ) : (
                <Link
                  to="/login"
                  className={` ${navbar["nav-link"]} ${navbar["logout-btn"]}`}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
