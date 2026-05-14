import { navigationData } from "./data/navigationData";

function SubNavbar({ type }) {
  const data = navigationData[type];
  const items = data ? data.subNav : [];

  return (
    <div className="sub-navbar">
      <div className="container sub-inner">

        <span className="country">🇵🇰 PAK</span>

        {items.map((item, i) => (
          <p key={i}>{item}</p>
        ))}

      </div>
    </div>
  );
}

export default SubNavbar;
