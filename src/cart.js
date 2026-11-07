/** Shopping-cart totals. Prices are in cents. */

/** items: [{ price, qty }] */
export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0)
}

/** Subtotal plus tax (rate as a fraction, e.g. 0.18), rounded to the nearest cent. */
export function total(items, taxRate = 0) {
  const sub = subtotal(items)
  return Math.round(sub * (1 + taxRate))
}
