import "./CategorySection.css";

function CategorySection({ title = "SHOP BY CATEGORY", categories = [] }) {
  return (
    <section className="category-section">
      <h2 className="collection-section-title">{title}</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <a className="category-card" href={category.href} key={category.id}>
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
