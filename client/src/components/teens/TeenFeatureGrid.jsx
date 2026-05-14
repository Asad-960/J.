import "./TeenFeatureGrid.css";

function TeenFeatureGrid({ items = [] }) {
  return (
    <section className="teen-feature-grid">
      {items.map((item) => (
        <a
          className={`teen-feature-card teen-feature-card-${item.size}`}
          href={item.href}
          key={item.id}
        >
          <img src={item.image} alt={item.title} />
          <div className="teen-feature-copy">
            <h2>{item.title}</h2>
            {item.subtitle && <p>{item.subtitle}</p>}
            <span>SHOP NOW</span>
          </div>
        </a>
      ))}
    </section>
  );
}

export default TeenFeatureGrid;
