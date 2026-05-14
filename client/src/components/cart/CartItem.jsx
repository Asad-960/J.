import "./CartItem.css";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { decreaseQty, increaseQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>PKR. {item.price}</p>

        <p>Size: {item.size || "30ML"}</p>

        <p>Product ID: {item.id}</p>

        <div className="qty-box">
          <button type="button" onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <button
          type="button"
          className="remove-link"
          onClick={() => removeFromCart(item.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default CartItem;
