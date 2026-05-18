import React, { useState, useEffect } from 'react';
import './Women.css';

const Women = () => {
  const [activeTab, setActiveTab] = useState('Ready to Wear');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products?category=women')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [
    { title: "EID COLLECTION '25", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/4_fcc06784-b38b-4d71-bffb-083e76e91c85.jpg?v=1778655985&width=400" },
    { title: "CO-ORDS", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/7_4b0880db-7687-440d-9217-bb2ecfac2bb1.jpg?v=1778656607&width=400" },
    { title: "READY TO WEAR", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/8_d0c1e978-6c44-4c2e-93c3-b56e26fb17d4.jpg?v=1778657167&width=400" },
    { title: "UNSTITCHED", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/5_c8c60811-ca8f-43a2-a79a-894660c69f99.jpg?v=1778656240&width=400" },
    { title: "FORMALS", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/41_e171719d-d2cd-4966-8027-d1dba31ea375.jpg?v=1776922191&width=400" },
    { title: "ACCESSORIES", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/42_9961b3a4-75fc-40fe-80df-fb401cee7de5.jpg?v=1776922188&width=400" },
  ];

  const tabs = ["Ready to Wear", "Unstitched", "Bags"];

  // Show only first 6 products
  const displayedProducts = products.slice(0, 6);

  return (
    <div className="women-page">
      {/* 1. Hero Section (Full Bleed) */}
      <section className="women-hero-section">
        <img src="https://www.junaidjamshed.com/cdn/shop/files/eid_uns1.jpg?v=1778566963&width=1800" alt="Women Hero" className="women-hero-img" />
      </section>

      {/* 2. Shop By Category (Contained) */}
      <section className="women-category-section">
        <h2 className="women-section-title">SHOP BY CATEGORY</h2>
        <div className="women-category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="women-category-card">
              <div className="women-category-img-wrapper">
                <img src={cat.imgUrl} alt={cat.title} className="women-category-img" />
              </div>
              <span className="women-category-title">{cat.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Ready to Wear Banner (Full Bleed) */}
      <section className="women-banner-section">
        <div className="women-banner-wrapper">
          <img src="https://picsum.photos/seed/rtw-banner/1920/600" alt="Ready To Wear Banner" className="women-banner-img" />
          <div className="women-banner-content">
            <h2 className="women-banner-title">READY TO WEAR</h2>
            <p className="women-banner-subtitle">NEW COLLECTION</p>
            <button className="women-shop-btn">SHOP NOW</button>
          </div>
        </div>
      </section>

      {/* 4. Trending Section (Contained) */}
      <section className="women-trending-section">
        <div className="women-trending-header">
          <h2 className="women-section-title">TRENDING</h2>
          <div className="women-trending-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`women-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className="women-see-all">SEE ALL</span>
        </div>

        <div className="women-product-grid">
          {displayedProducts.map((prod, index) => (
            <div key={index} className="women-product-card">
              <div className="women-product-img-wrapper">
                {prod.isNew && <span className="women-badge-new">NEW</span>}
                <img src={prod.image_url || prod.imgUrl} alt={prod.name} className="women-product-img" />
              </div>
              <div className="women-product-info">
                <h3 className="women-product-name">{prod.name}</h3>
                <p className="women-product-price">PKR {prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Promos (Full Bleed) */}
      <section className="women-promos-section">
        <div className="women-promo-row-2">
          <div className="women-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/coord_0c504f1e-d34e-45c9-a927-60d9cfa807fc.jpg?v=1777268569&width=2000" alt="Co-Ords" className="women-promo-bg" />
            <div className="women-promo-content">
              <h3>CO-ORDS</h3>
              <p>NEW</p>
              <button className="women-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="women-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/lawn_e40bd16a-8370-48e9-819e-7a1c28b7cb62.jpg?v=1777269186&width=2000" alt="Lawn 3 Piece" className="women-promo-bg" />
            <div className="women-promo-content">
              <h3>LAWN 3 PIECE</h3>
              <p>UNSTITCHED</p>
              <button className="women-text-btn">SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className="women-promo-row-3">
          <div className="women-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/67.jpg?v=1777269727&width=2000" alt="Artisanal" className="women-promo-bg" />
            <div className="women-promo-content">
              <h3>ARTISANAL</h3>
              <button className="women-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="women-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/45_d755d577-899b-42eb-918f-adeeee287b20.jpg?v=1777268673&width=2000" alt="Kurta" className="women-promo-bg" />
            <div className="women-promo-content">
              <h3>KURTA</h3>
              <button className="women-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="women-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/46_8d200739-7bc3-4223-8591-b965f0bcab34.jpg?v=1777269858&width=2000" alt="Bags" className="women-promo-bg" />
            <div className="women-promo-content">
              <h3>BAGS</h3>
              <button className="women-text-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Store Locator (Full Bleed Image) */}
      <section className="women-store-locator-section">
        <div className="women-store-locator-wrapper">
          <img src="https://www.junaidjamshed.com/cdn/shop/files/outlet.jpg?v=1777189456&width=1800" alt="Store Locator" className="women-store-locator-bg" />
          <div className="women-store-locator-overlay">
            <h2 className="women-store-locator-title">STORE LOCATOR</h2>
            <p className="women-store-locator-text">Your favourites, now just a visit away!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;
