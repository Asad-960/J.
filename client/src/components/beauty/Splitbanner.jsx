import skincare from "../../assets/skincare.jpg";
import spray from "../../assets/spray.webp";

import "./SplitBanner.css";

function SplitBanner() {
  return (
    <section className="split-banner">
      <div className="split-item">
        <img src={skincare} alt="Skincare collection" />

        <div className="split-overlay">
          <h2>SKINCARE</h2>
          <p>GLOW EVERY STEP OF THE WAY!</p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="split-item">
        <img src={spray} alt="Continuous spray perfumes" />

        <div className="split-overlay">
          <h2>CONTINUOUS SPRAY PERFUMES</h2>
          <p>NONSTOP FRESHNESS, ALL DAY</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default SplitBanner;
