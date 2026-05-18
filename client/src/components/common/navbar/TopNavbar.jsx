import "./Navbar.css";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container top-inner">

        <div className="top-left">
          <span>SIGN IN</span>
          <span>TRACKING INFO</span>
          <span>GIFTING</span>
        </div>

        <div className="top-center">
          Step Into the Season with Our Latest Arrivals –
          <span className="shop-now">Shop Now</span>
        </div>

        <div className="top-right"></div>

      </div>
    </div>
  );
}

export default TopNavbar;