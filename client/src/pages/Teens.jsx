import TeensHero from "../components/teens/TeensHero";
import TeenFeatureGrid from "../components/teens/TeenFeatureGrid";
import CategorySection from "../components/product/CategorySection";
import ProductGrid from "../components/product/ProductGrid";
import {
  teenCategories,
  teenFeatureItems,
  teenTabs,
  teenTrending,
} from "../data/collectionData";
import "./teens.css";

const TeensPage = () => {
  return (
    <div className="teens-page">
      <TeensHero />
      <CategorySection categories={teenCategories} />
      <ProductGrid tabs={teenTabs} products={teenTrending} />
      <TeenFeatureGrid items={teenFeatureItems} />
    </div>
  );
};

export default TeensPage;
