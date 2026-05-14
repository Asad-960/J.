import { navigationData } from "./data/navigationData";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Sidebar({ open, setOpen, type }) {
  if (!open) return null;

  const data = navigationData[type];
  const images = data ? data.images : [];
  const subNav = data ? data.subNav : [];

  return (
    <>
      <div className="overlay" onClick={() => setOpen(false)}></div>

      <div className="sidebar open">
        {/* HEADER */}
        <div className="sidebar-header">
          <span className="close-btn" onClick={() => setOpen(false)}>x</span>
        </div>

        {/* CATEGORY TABS */}
        <div className="sidebar-top-links">
          <Link to="/">WOMEN</Link>
          <Link to="/men">MEN</Link>
          <Link to="/beauty">FRAGRANCE & BEAUTY</Link>
          <Link to="/teens">TEENS</Link>
        </div>

        {/* IMAGE ROW */}
        <div className="sidebar-images">
          {images.map((item, i) => (
            <div key={i} className="img-box">
              <img src={item.img} alt="" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* MENU */}
        <ul className="menu-list">
          {subNav.map((item, i) => (
            <li key={i}>
              {item} <span>&gt;</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
