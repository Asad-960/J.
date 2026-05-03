import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

import Sidebar from "./SideBar";

import "./Navbar.css";

function MainNavbar({ type }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
          <div className="mobile-menu" onClick={() => setOpen(true)}>
            MENU
          </div>

          {/* LOGO */}
          <div className="nav-center">
            <img src={logo} alt="logo" className="logo-img" />
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <span>SEARCH</span>
            <span className="wishlist">WISHLIST</span>
            <span>BAG</span>
          </div>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} type={type} />
    </>
  );
}

export default MainNavbar;
