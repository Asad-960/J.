import HeroVideo from "../components/beauty/HeroVideo";
import PromoBanner from "../components/beauty/PromoBanner";
import SplitBanner from "../components/beauty/Splitbanner";
import CategorySection from "../components/product/CategorySection";
import ProductGrid from "../components/product/ProductGrid";
import {
  fragranceCategories,
  fragranceTabs,
  fragranceTrending,
} from "../data/collectionData";

import lipstickBanner from "../assets/liptick.webp";
import hairmistBanner from "../assets/hairmist.webp";
import jananBanner from "../assets/showergel.webp";
import "./beauty.css";

function FragranceBeauty() {
  return (
    <div className="beauty-page">
      <HeroVideo />

      <PromoBanner image={lipstickBanner} alt="Lipstick collection" />
      <PromoBanner image={hairmistBanner} alt="Hair mist collection" />

      <CategorySection categories={fragranceCategories} />

      <ProductGrid tabs={fragranceTabs} products={fragranceTrending} />

      <PromoBanner image={jananBanner} alt="Fragrance collection" />

      <SplitBanner />
    </div>
  );
}

export default FragranceBeauty;
