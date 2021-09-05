import "../scss/main.scss";
import Vue from "vue";
import { Tab, Modal } from "bootstrap";
import stopPropagationOnElements from "./utils/stopPropagationOnElements";
import StickySidebar from "sticky-sidebar";
import { addToCart } from "./utils/addToCart";
import { fetchWishlistAction } from "./api/api-actions/fetchWishlistAction";
import { callWishlistAction } from "./utils/callWishlistAction";
import { callCompareAction } from "./utils/callCompareAction";

window.Vue = Vue;
document.addEventListener(`DOMContentLoaded`, () => {
  // Fixing the header
  // new FixedHeader().init();

  // Stop propagation on specified elements
  stopPropagationOnElements(`.js-stop-propagation-click`, `click`);

  if (document.querySelector(".js-sidebar")) {
    // Sticky filter
    new StickySidebar(".js-sidebar", {
      topSpacing: 14,
      bottomSpacing: 14,
      containerSelector: ".js-main-content",
      innerWrapperSelector: ".js-sidebar-inner",
    });
  }

  // Add to cart
  const addToClickButtonElements = document.querySelectorAll(
    ".js-add-to-cart-button"
  );
  const cartPriceElement = document.querySelector(".js-cart-price");

  addToClickButtonElements.forEach((addToClickButton) =>
    addToClickButton.addEventListener("click", (evt) => {
      // Check if product is in wishlist
      // We have to remove product from wishlist before adding it to cart
      const clickedButton = evt.target;
      const catalogItemElement = clickedButton.closest(`.js-product-container`);
      const addToWishButtonElement = catalogItemElement.querySelector(
        `.js-toggle-in-wishlist`
      );

      if (
        addToWishButtonElement &&
        addToWishButtonElement.ariaPressed === `true`
      ) {
        callWishlistAction(addToWishButtonElement).then(() =>
          addToCart(evt, cartPriceElement)
        );
      } else {
        addToCart(evt, cartPriceElement);
      }
    })
  );

  // Add to wish
  const addToWishButtonElements = document.querySelectorAll(
    `.js-toggle-in-wishlist`
  );

  addToWishButtonElements.forEach((addToWishButton) =>
    addToWishButton.addEventListener(`click`, ({ target }) =>
      callWishlistAction(target)
    )
  );

  // Add to compare
  const toggleCompareButtonElements = document.querySelectorAll(
    `.js-toggle-compare`
  );
  toggleCompareButtonElements.forEach((toggleCompareButton) =>
    toggleCompareButton.addEventListener(`click`, ({ target }) =>
      callCompareAction(target)
    )
  );
});
