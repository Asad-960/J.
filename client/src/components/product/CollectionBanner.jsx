import "./CollectionBanner.css";

function CollectionBanner({ image, alt, title, subtitle, buttonText = "SHOP NOW", align = "left" }) {
  return (
    <section className="collection-banner-section">
      <div className="collection-banner-wrapper">
        <img src={image} alt={alt || title} className="collection-banner-img" />
        <div className={`collection-banner-content align-${align}`}>
          {title && <h2 className="collection-banner-title" dangerouslySetInnerHTML={{ __html: title }}></h2>}
          {subtitle && <p className="collection-banner-subtitle">{subtitle}</p>}
          {buttonText && <button className="collection-shop-btn">{buttonText}</button>}
        </div>
      </div>
    </section>
  );
}

export default CollectionBanner;
