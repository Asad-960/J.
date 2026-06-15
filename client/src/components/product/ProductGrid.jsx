import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({
  title = "TRENDING",
  tabs = [],
  products = [],
  activeTab = 0,
  seeAllHref = "#",
  onTabChange,
}) {
  // Show only the first 6 products
  const displayedProducts = products.slice(0, 6);

  // Debug: check products in browser console
  console.log("Products received in ProductGrid:", products);
  console.log("Products displayed in ProductGrid:", displayedProducts);

  return (
    <section className="collection-trending-section">
      {/* Header Section */}
      <div className="collection-trending-top">
        {/* Section Title */}
        <h2 className="collection-section-title collection-trending-title">
          {title}
        </h2>

        {/* Tabs */}
        {tabs.length > 0 && (
          <div
            className="collection-trending-tabs"
            aria-label={`${title} categories`}
          >
            {tabs.map((tab, index) => {
              const isActive = onTabChange
                ? (activeTab === tab || activeTab === index)
                : (index === activeTab);
              return (
                <button
                  key={tab}
                  type="button"
                  className={isActive ? "active" : ""}
                  onClick={() => onTabChange && onTabChange(tab, index)}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        )}


        {/* See All Link */}
        <a
          href={seeAllHref}
          className="collection-see-all"
        >
          SEE ALL
        </a>
      </div>

      {/* Products Grid */}
      <div className="collection-products-grid">
        {/* If no products are available */}
        {!products || products.length === 0 ? (
          <div className="no-products-message">
            <p>No products found in this category.</p>
          </div>
        ) : (
          /* Show only first 6 products */
          displayedProducts.map((item, index) => (
            <ProductCard
              key={item.id || index}
              item={item}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductGrid;