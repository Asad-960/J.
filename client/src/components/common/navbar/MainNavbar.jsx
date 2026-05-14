import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import { useCart } from "../../../context/CartContext";

import Sidebar from "./SideBar";

import "./Navbar.css";

function MainNavbar({ type }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openCart, totalItems } = useCart();

  return (
    <>
      <div className="main-navbar">
        {/* ===== MOBILE CATEGORY ROW ===== */}
        <div className="mobile-category">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">WOMEN</Link>
          <Link className={location.pathname === "/men" ? "active" : ""} to="/men">MEN</Link>
          <Link className={location.pathname === "/beauty" ? "active" : ""} to="/beauty">FRAGRANCE & BEAUTY</Link>
          <Link className={location.pathname === "/teens" ? "active" : ""} to="/teens">TEENS</Link>
        </div>

        {/* ===== MAIN ROW ===== */}
        <div className="container main-inner">
          {/* LEFT (DESKTOP ONLY) */}
          <div className="nav-left desktop-only">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">WOMEN</Link>
            <Link className={location.pathname === "/men" ? "active" : ""} to="/men">MEN</Link>
            <Link className={location.pathname === "/beauty" ? "active" : ""} to="/beauty">FRAGRANCE & BEAUTY</Link>
            <Link className={location.pathname === "/teens" ? "active" : ""} to="/teens">TEENS</Link>
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="mobile-menu"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

          {/* LOGO */}
          <div className="nav-center">
            <img src={logo} alt="logo" className="logo-img" />
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <span>SEARCH</span>
            <span className="wishlist">WISHLIST</span>
            <button type="button" className="bag-button" onClick={openCart}>
              <FiShoppingBag />
              {totalItems > 0 && <span className="bag-count">{totalItems}</span>}
            </button>
          </div>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} type={type} />
    </>
  );
}

export default MainNavbar;
