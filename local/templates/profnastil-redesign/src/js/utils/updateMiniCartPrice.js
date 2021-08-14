/**
 *
 * @param {number} newPrice
 * @param {Element} cartPriceElement
 */
export const updateMiniCartPrice = (newPrice, cartPriceElement) => {
  cartPriceElement.textContent = newPrice.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  });
}
