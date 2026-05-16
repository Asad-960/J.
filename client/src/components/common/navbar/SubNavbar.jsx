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
      </div>
    </div>
  );
}

export default SubNavbar;
