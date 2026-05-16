import "./ProductCard.css";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/useCart";

function ProductCard({ item }) {
  const { addToCart } = useCart();
  
  // Provide a default empty object if item is null or undefined
  const productData = item || {};

  // Data coming from Flask API
  // Flask returns: id, name, price, image_url, category, tags, detail
  const image = productData.image_url || "/placeholder-image.jpg"; // Added a placeholder image path
  const name = productData.name || "Loading...";
  const price = productData.price || 0;
  const currency = "PKR. ";

  // Create the object that will be stored in the cart
  // Your cart expects "image" and "currency"
  const product = {
    ...productData,
    image: image,
    currency: currency,
  };

  return (
    <article className="collection-product-card">
      {/* Product Image */}
      <div className="product-card-image"> {/* Added a wrapper for potential styling */}
        <img src={image} alt={name} loading="lazy" /> {/* Added loading="lazy" */}
      </div>

      {/* Product Name */}
      <h3>{name}</h3>

      {/* Wishlist Button */}
      <button type="button" className="wishlist-btn">
        <FiHeart size={24} />
      </button>

      {/* Add to Cart Button */}
      <button
        type="button"
        className="bag-btn"
        onClick={() => addToCart(product)}
      >
        <FiShoppingBag size={20} />
      </button>

      {/* Product Price */}
      <div className="collection-product-price">
        <span>
          {currency}
          {price}
        </span>
      </div>
    </article>
  );
}

export default ProductCard;
