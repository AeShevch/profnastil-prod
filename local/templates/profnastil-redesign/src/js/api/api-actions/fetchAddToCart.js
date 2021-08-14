import Api from "../api";

const api = new Api();

export const fetchAddToCart = (ajaxUrl, quantity) => api.get(`${ajaxUrl}&ajax_basket=Y&quantity=${quantity}`)
