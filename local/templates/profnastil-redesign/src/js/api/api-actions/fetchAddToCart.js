import Api from "../api";

const api = new Api();

export const fetchAddToCart = (id, quantity) => api.post({
    id,
    quantity
}, `/catalog/ajax.php?RND=${Math.random()}`, ``)
