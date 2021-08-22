import "../scss/main.scss";
import Vue from "vue";
import { Tab, Modal } from "bootstrap";
import stopPropagationOnElements from "./utils/stopPropagationOnElements";
import StickySidebar from "sticky-sidebar";
import { addToCart } from "./utils/addToCart";

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
      innerWrapperSelector: ".js-sidebar-inner"
    });
  }

  const addToClickButtonElements = document.querySelectorAll(
    ".js-add-to-cart-button"
  );
  const cartPriceElement = document.querySelector(".js-cart-price");

  addToClickButtonElements.forEach(addToClickButton =>
    addToClickButton.addEventListener("click", evt =>
      addToCart(evt, cartPriceElement)
    )
  );
});
