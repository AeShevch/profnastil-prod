import Api from "../api";

const api = new Api();

const API_URL = `/local/ajax/wishlist.php`;

export const fetchWishlistAction = (
  action,
  productId,
  catalogPriceId,
  catalogPrice,
  productName,
  productDetailedPageUrl
) =>
  api.post(
    {
      p_id: productId,
      pp_id: catalogPriceId,
      p: catalogPrice,
      name: productName,
      dpu: productDetailedPageUrl,
      action,
    },
    API_URL,
    ``
  );
