import React, { useState, useEffect } from 'react';
import { PromoBanner, CategorySection, CollectionBanner, ProductGrid, PromoGrid, StoreLocator } from '../../components';
import { womenCategories, womenPromos } from '../../data/collectionData';

const Women = () => {
  const [activeTab, setActiveTab] = useState('Ready to Wear');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products?category=women')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const tabs = ["Ready to Wear", "Unstitched", "Bags"];

  return (
    <div className="women-page">
      <PromoBanner image="https://www.junaidjamshed.com/cdn/shop/files/eid_uns1.jpg?v=1778566963&width=1800" alt="Women Hero" />
      
      <CategorySection categories={womenCategories} />
      
      <CollectionBanner 
        image="https://picsum.photos/seed/rtw-banner/1920/600" 
        alt="Ready To Wear Banner"
        title="READY TO WEAR"
        subtitle="NEW COLLECTION"
      />
      
      <ProductGrid 
        tabs={tabs} 
        products={products} 
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      
      <PromoGrid promos={womenPromos} />
      
      <StoreLocator />
    </div>
  );
};

export default Women;
