import { useEffect, useState } from "react";
import { FiGrid, FiColumns } from "react-icons/fi";
import { ProductCard } from "../../components";
import "./fragrances.css";

const fragranceFilters = ["For Men", "For Women", "Gift Set", "Attar", "Body Spray"];
const fragranceCategory = encodeURIComponent("fragrance");

function Fragrances() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/products?category=${fragranceCategory}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load fragrances");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setStatus("loaded");
      })
      .catch(() => {
        setProducts([]);
        setStatus("error");
      });
  }, []);

  return (
    <div className="fragrances-page">
      <section className="fragrances-collection" aria-labelledby="fragrances-title">
        <div className="fragrances-breadcrumb">HOME / FRAGRANCES</div>

        <div className="fragrances-heading-row">
          <div className="fragrances-title-wrap">
            <h1 id="fragrances-title">FRAGRANCES</h1>
            <span className="fragrances-title-divider" aria-hidden="true">
              /
            </span>
            <span className="fragrances-count">
              {products.length} Products
            </span>
          </div>

          <div className="fragrances-view-toggle" aria-label="Product view">
            <button type="button" aria-label="Compact view">
              <FiColumns />
            </button>
            <button type="button" aria-label="Medium view">
              <FiColumns />
            </button>
            <button type="button" aria-label="Grid view">
              <FiGrid />
            </button>
          </div>
        </div>

        <div className="fragrances-toolbar">
          <div className="fragrances-filter-links" aria-label="Fragrance filters">
            {fragranceFilters.map((filter) => (
              <button type="button" key={filter}>
                {filter}
              </button>
            ))}
          </div>

          <button type="button" className="fragrances-sort-button">
            FILTER AND SORT
          </button>
        </div>

        {status === "error" ? (
          <p className="fragrances-message">Unable to load fragrance products.</p>
        ) : status === "loading" ? (
          <p className="fragrances-message">Loading fragrances...</p>
        ) : products.length === 0 ? (
          <p className="fragrances-message">
            No products found in the fragrance category.
          </p>
        ) : (
          <div className="fragrances-grid">
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Fragrances;
