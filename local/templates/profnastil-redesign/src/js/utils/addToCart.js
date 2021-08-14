import { fetchAddToCart } from "../api/api-actions/fetchAddToCart";
import { updateMiniCartPrice } from "./updateMiniCartPrice";
import { moveImageToCart } from "./moveImageToCart";

export const addToCart = (evt, cartPriceElement) => {
  // Elements
  const clickedButton = evt.target;
  const productContainer = clickedButton.closest(`.js-product-container`);
  const quantityInput = productContainer.querySelector(`.js-product-quantity`);

  // Showing loader
  clickedButton.classList.add(`isLoading`);
  clickedButton.disabled = true;

  // Getting data
  const { ajaxUrl, price } = clickedButton.dataset;
  const quantity = quantityInput ? quantityInput.value : 1;
  const prevCartPrice = parseInt(
    cartPriceElement.textContent.replace(/[^+\d]/g, ``),
    10
  );

  // Sending data to server
  fetchAddToCart(ajaxUrl, quantity).then(res => {
    if (res.STATUS === `OK`) {
      // Updating mini cart
      const newCartPrice = prevCartPrice + price * quantity;
      updateMiniCartPrice(newCartPrice, cartPriceElement);
      moveImageToCart(productContainer, cartPriceElement);
    }

    if (res.STATUS === `ERROR`) {
      throw new Error(res.MESSAGE);
    }

    // Removing loader
    clickedButton.classList.remove(`isLoading`);
    clickedButton.disabled = false;
  });
};
