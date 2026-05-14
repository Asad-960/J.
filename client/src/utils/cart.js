export function getCartSubtotal(items) {
  return items.reduce(
    (total, item) => total + getPriceNumber(item.price) * item.quantity,
    0
  );
}

export function getCartCount(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

function getPriceNumber(price) {
  return Number(String(price).replace(/,/g, "")) || 0;
}
