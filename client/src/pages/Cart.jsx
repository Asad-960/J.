import { FiX } from "react-icons/fi";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../context/useCart";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    subtotal,
  } = useCart();

  // If drawer is closed, show nothing
  if (!isCartOpen) {
    return null;
  }

  return (
    <div
      className="cart-overlay"
      onClick={closeCart}
    >
      <div
        className="cart-drawer"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* Header */}
        <div className="cart-header">
          <h2>Cart</h2>

          <button
            type="button"
            onClick={closeCart}
          >
            <FiX />
          </button>
        </div>

        {/* Products */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal</span>

            <strong>
              PKR. {subtotal.toLocaleString()}
            </strong>
          </div>

          <p>
            Taxes included and shipping
            calculated at checkout.
          </p>

          <button
            type="button"
            className="checkout-btn"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
