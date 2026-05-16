import { useState } from "react";
import { CartContext } from "./CartContextValue";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Open cart drawer
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Close cart drawer
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((items) => {
      const itemExists = items.some((item) => item.id === product.id);

      // If product is not in cart, add it
      if (!itemExists) {
        return [...items, { ...product, quantity: 1 }];
      }

      // If product already exists, increase quantity
      return items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });

    openCart();
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = {
    cartItems,
    isCartOpen,
    subtotal,
    totalItems,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
