import "./ProductCard.css";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function ProductCard({ item }) {
  const { addToCart } = useCart();

  return (
    <article className="collection-product-card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      <button type="button" className="wishlist-btn">
        <FiHeart size={24} />
      </button>

      <button
        type="button"
        className="bag-btn"
        onClick={() => addToCart(item)}
      >
        <FiShoppingBag size={20} />
      </button>

      <div className="collection-product-price">
        <span>{item.currency}{item.price}</span>
      </div>
    </article>
  );
}

export default ProductCard;
