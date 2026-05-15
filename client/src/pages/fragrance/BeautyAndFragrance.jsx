import { useState, useEffect } from "react";
import HeroVideo from "../../components/beauty/HeroVideo";
import PromoBanner from "../../components/beauty/PromoBanner";
import SplitBanner from "../../components/beauty/Splitbanner";
import ProductGrid from "../../components/product/ProductGrid";
import { fragranceTabs } from "../../data/collectionData";

import lipstickBanner from "../../assets/liptick.webp";
import hairmistBanner from "../../assets/hairmist.webp";
import jananBanner from "../../assets/showergel.webp";
import "./beauty.css";

const fragranceCategory = encodeURIComponent("fragrance");

function BeautyAndFragrance() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${fragranceCategory}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="beauty-page">
      <HeroVideo />

      <PromoBanner image={lipstickBanner} alt="Lipstick collection" />
      <PromoBanner image={hairmistBanner} alt="Hair mist collection" />

      <ProductGrid tabs={fragranceTabs} products={products} />

      <PromoBanner image={jananBanner} alt="Fragrance collection" />

      <SplitBanner />
    </div>
  );
}

export default BeautyAndFragrance;
