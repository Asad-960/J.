import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({
  title = "TRENDING",
  tabs = [],
  products = [],
  activeTab = 0,
  seeAllHref = "#",
}) {
  return (
    <section className="collection-trending-section">
      <div className="collection-trending-top">
        <h2 className="collection-section-title collection-trending-title">{title}</h2>

        {tabs.length > 0 && (
          <div className="collection-trending-tabs" aria-label={`${title} categories`}>
            {tabs.map((tab, index) => (
              <button
                className={index === activeTab ? "active" : ""}
                type="button"
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <a className="collection-see-all" href={seeAllHref}>
          SEE ALL
        </a>
      </div>

      <div className="collection-products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
