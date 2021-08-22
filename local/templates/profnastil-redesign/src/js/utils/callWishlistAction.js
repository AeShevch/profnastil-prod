import { fetchWishlistAction } from "../api/api-actions/fetchWishlistAction";

export const callWishlistAction = (addToWishButton) => {
  const {
    action,
    productId,
    catalogPriceId,
    catalogPrice,
    productName,
    productDetailedPageUrl,
  } = addToWishButton.dataset;

  return fetchWishlistAction(
    action,
    productId,
    catalogPriceId,
    catalogPrice,
    productName,
    productDetailedPageUrl
  ).then((inWishedCount) => {
    // Updating header counter
    document.querySelector(`.header-link-count-wishlist`).innerText = inWishedCount;
    // Updating button properties
    switch (action) {
      case `add`:
        addToWishButton.dataset.action = `remove`;
        addToWishButton.ariaPressed = `true`;
        break;
      case `remove`:
        addToWishButton.dataset.action = `add`;
        addToWishButton.ariaPressed = `false`;
        break;
    }
  });
};
