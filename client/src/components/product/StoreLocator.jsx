import "./StoreLocator.css";

function StoreLocator({
  image = "https://www.junaidjamshed.com/cdn/shop/files/outlet.jpg?v=1777189456&width=1800",
  title = "STORE LOCATOR",
  text = "Your favourites, now just a visit away!"
}) {
  return (
    <section className="store-locator-section">
      <div className="store-locator-wrapper">
        <img src={image} alt={title} className="store-locator-bg" />
        <div className="store-locator-overlay">
          <h2 className="store-locator-title">{title}</h2>
          <p className="store-locator-text">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default StoreLocator;
