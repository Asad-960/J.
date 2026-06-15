import "./PromoGrid.css";

function PromoGrid({ promos = [] }) {
  return (
    <section className="collection-promos-section">
      {promos.map((row, rowIndex) => (
        <div key={rowIndex} className={`collection-promo-row ${row.type}`}>
          {row.cards.map((card, cardIndex) => (
            <div key={cardIndex} className="collection-promo-card">
              <img src={card.image} alt={card.title} className="collection-promo-bg" />
              <div className="collection-promo-content">
                {card.title && <h3>{card.title}</h3>}
                {card.subtitle && <p>{card.subtitle}</p>}
                <button className="collection-text-btn">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default PromoGrid;
