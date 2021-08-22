import { fetchAddToCart } from "../api/api-actions/fetchAddToCart";
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
  const { id } = clickedButton.dataset;
  const quantity = quantityInput ? quantityInput.value : 1;

  // Sending data to server
  fetchAddToCart(id, quantity).then((res) => {
    console.log(res);
    if (res.STATUS === `Ok`) {
      // Updating mini cart
      BX.onCustomEvent("OnBasketChange");
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
