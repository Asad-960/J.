import React, { useState, useEffect } from 'react';
import { HeroVideo, CategorySection, CollectionBanner, ProductGrid, PromoGrid } from '../../components';
import { menCategories, menPromos } from '../../data/collectionData';
import menVideo from "../../assets/menHero.mp4";

const Men = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVALS');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products?category=men')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const tabs = ["NEW ARRIVALS", "KURTA", "WAISTCOAT", "UNSTITCHED"];

  return (
    <div className="men-page">
      <HeroVideo video={menVideo} isBtn={false} />
      
      <CategorySection categories={menCategories} />
      
      <CollectionBanner 
        image="https://www.junaidjamshed.com/cdn/shop/files/31_a0f155d9-4148-4071-bbb5-d218805d591e.jpg?v=1777017347&width=1800" 
        alt="Boski Banner"
        title="BOSKI<br />UNSTITCHED FABRIC"
      />
      
      <ProductGrid 
        tabs={tabs} 
        products={products} 
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      
      <PromoGrid promos={menPromos} />
    </div>
  );
};

export default Men;
