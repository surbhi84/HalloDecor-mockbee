import navbar from "./navbar.module.css";
import { Carousel } from "../carousel/Carousel";
import { Routes, Route, Link } from "react-router-dom";

export const Navbar = ({ isHome }) => {
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
        <Link className={navbar["logo"]} to="/">
          <h2 className="mg-xs">Hallo!Decor</h2>
        </Link>

        <div className="menu-btn mg-xs hamburger-icon mg-left-auto">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="nav-links">
          <li className="search search-box">
            <input type="search" placeholder="Search" className="search-bar" />
            <button className="search-btn">
              <img
                src="/assets/icons/search.svg"
                alt="search icon"
                className="search-icon"
              />
            </button>
          </li>

          <li>
            <Link className={`nav-link ${navbar["nav-link"]}`} to="/profile">
              <img
                src="/assets/icons/profile.svg"
                alt="Profile icon"
                className="nav-icon"
              />
              Profile
            </Link>
          </li>

          <li>
            <Link className={`nav-link ${navbar["nav-link"]}`} to="/wishlist">
              <img
                src="/assets/icons/heartFilled.svg"
                alt="heart icon"
                className="nav-icon"
              />
              Wishlist
            </Link>
          </li>

          <li>
            <Link className={`nav-link ${navbar["nav-link"]}`} to="/cart">
              <img
                src="/assets/icons/cart.svg"
                alt="cart icon"
                className="nav-icon"
              />
              Cart
            </Link>
          </li>

          <li>
            <Link
              to="/pages/login/"
              className={`text-dec-none flex-col flex-center ${navbar["logout-btn"]}`}
            >
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
