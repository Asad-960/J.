import { navigationData } from "./data/navigationData";
import { Link } from "react-router-dom";
import pakFlag from "../../../assets/pak.svg"; // Adjust path if needed

function SubNavbar({ type }) {
  const data = navigationData[type];
  const items = data ? data.subNav : [];
  const subNavLinks = {
    FRAGRANCES: "/fragrances",
    MAKEUP: "/beauty",
    SKINCARE: "/beauty",
    "NEW IN": type === "beauty" ? "/beauty" : null,
  };

  return (
    <div className="sub-navbar">
      <div className="container sub-inner">
        {/* Country */}
        <span className="country">
          <img
            src={pakFlag}
            alt="Pakistan Flag"
            className="country-flag"
          />
          PAK
        </span>

        {/* Navigation Items */}
        {items.map((item, index) => {
          const href = subNavLinks[item];

          return href ? (
            <Link className="sub-nav-link" key={index} to={href}>
              {item}
            </Link>
          ) : (
            <p key={index}>{item}</p>
          );
        })}

        {/* Currency Dropdown */}
        <span className="sub-right">
          PKR
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "2px", marginTop: "2px" }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SubNavbar;
