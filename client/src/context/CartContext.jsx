/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { getCartCount, getCartSubtotal } from "../utils/cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((items) => {
      const itemExists = items.some((item) => item.id === product.id);

      if (!itemExists) {
        return [...items, { ...product, quantity: 1 }];
      }

      return items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });

    openCart();
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const value = {
    cartItems,
    isCartOpen,
    subtotal: getCartSubtotal(cartItems),
    totalItems: getCartCount(cartItems),
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
