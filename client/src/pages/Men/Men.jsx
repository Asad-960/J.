import React, { useState, useEffect } from 'react';
import './Men.css';
import HeroVideo from '../../components/beauty/HeroVideo';
import menVideo from "../../assets/menHero.mp4";

const Men = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVALS');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products?category=men')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [
    { title: "KURTA PAJAMA", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/19.jpg?v=1775632051&width=400" },
    { title: "KAMEEZ SHALWAR", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/34_562a3251-9161-4dc6-9aea-0d68dc58dce0.jpg?v=1775715404&width=400" },
    { title: "KURTA", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/33_34b8c613-b228-48b2-a033-c941395ce564.jpg?v=1775715403&width=400" },
    { title: "WAISTCOAT", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/35.jpg?v=1775716135&width=400" },
    { title: "UNSTITCHED", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/24.jpg?v=1775639650&width=400" },
    { title: "FOOTWEAR", imgUrl: "https://www.junaidjamshed.com/cdn/shop/files/20.jpg?v=1775632296&width=400" },
  ];

  const tabs = ["NEW ARRIVALS", "KURTA", "WAISTCOAT", "UNSTITCHED"];

  // Show only first 6 products
  const displayedProducts = products.slice(0, 6);

  return (
    <div className="men-page">

      <HeroVideo video={menVideo} isBtn={false} />


      <section className="men-category-section">
        <h2 className="men-section-title">SHOP BY CATEGORY</h2>
        <div className="men-category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="men-category-card">
              <div className="men-category-img-wrapper">
                <img src={cat.imgUrl} alt={cat.title} className="men-category-img" />
              </div>
              <span className="men-category-title">{cat.title}</span>
            </div>
          ))}
        </div>
      </section>


      <section className="men-boski-section">
        <div className="men-boski-wrapper">
          <img src="https://www.junaidjamshed.com/cdn/shop/files/31_a0f155d9-4148-4071-bbb5-d218805d591e.jpg?v=1777017347&width=1800" alt="Boski Banner" className="men-boski-img" />
          <div className="men-boski-content">
            <h2 className="men-boski-title">BOSKI<br />UNSTITCHED FABRIC</h2>
            <button className="men-shop-btn">SHOP NOW</button>
          </div>
        </div>
      </section>


      <section className="men-trending-section">
        <div className="men-trending-header">
          <h2 className="men-section-title">TRENDING</h2>
          <div className="men-trending-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`men-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className="men-see-all">SEE ALL</span>
        </div>

        <div className="men-product-grid">
          {displayedProducts.map((prod, index) => (
            <div key={index} className="men-product-card">
              <div className="men-product-img-wrapper">
                <img src={prod.image_url || prod.imgUrl} alt={prod.name} className="men-product-img" />
              </div>
              <div className="men-product-info">
                <h3 className="men-product-name">{prod.name}</h3>
                <p className="men-product-price">PKR {prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="men-promos-section">
        <div className="men-promo-row-2">
          <div className="men-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/18.jpg?v=1775630622&width=2000" alt="Autograph Series" className="men-promo-bg" />
            <div className="men-promo-content">
              <h3>AUTOGRAPH SERIES</h3>
              <p>MENS UNSTITCHED COLLECTION</p>
              <button className="men-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="men-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/17.jpg?v=1775630367&width=2000" alt="Ceremonial" className="men-promo-bg" />
            <div className="men-promo-content">
              <h3>CEREMONIAL</h3>
              <p>MENS UNSTITCHED COLLECTION</p>
              <button className="men-text-btn">SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className="men-promo-row-3">
          <div className="men-promo-card">
            <img src="http://junaidjamshed.com/cdn/shop/files/16.jpg?v=1775629656&width=2000" alt="Heritage Edit '25" className="men-promo-bg" />
            <div className="men-promo-content">
              <h3>HERITAGE EDIT '25</h3>
              <button className="men-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="men-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/15.jpg?v=1775629656&width=2000" alt="Expression Series" className="men-promo-bg" />
            <div className="men-promo-content">
              <h3>EXPRESSION SERIES</h3>
              <button className="men-text-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="men-promo-card">
            <img src="https://www.junaidjamshed.com/cdn/shop/files/14.jpg?v=1775629333&width=2000" alt="Like Father Like Son" className="men-promo-bg" />
            <div className="men-promo-content">
              <h3>LIKE FATHER LIKE SON</h3>
              <button className="men-text-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Men;

