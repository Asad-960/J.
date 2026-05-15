import { useState, useEffect } from "react";
import TeensHero from "../components/teens/TeensHero";
import TeenFeatureGrid from "../components/teens/TeenFeatureGrid";
import CategorySection from "../components/product/CategorySection";
import ProductGrid from "../components/product/ProductGrid";
import {
  teenCategories,
  teenFeatureItems,
  teenTabs,
} from "../data/collectionData";
import "./teens.css";

const TeensPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products?category=teens')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="teens-page">
      <TeensHero />
      <CategorySection categories={teenCategories} />
      <ProductGrid tabs={teenTabs} products={products} />
      <TeenFeatureGrid items={teenFeatureItems} />
    </div>
  );
};

export default TeensPage;
