import "./PromoBanner.css";

function PromoBanner({ image, alt = "Beauty banner" }) {
  return (
    <section className="promo-banner">
      <img src={image} alt={alt} />
    </section>
  );
}

export default PromoBanner;
