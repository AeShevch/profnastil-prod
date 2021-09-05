import Api from "../api";

const api = new Api();

const API_URL = `/local/ajax/list_compare.php`;

export const CompareAction = {
  Add: `ADD_TO_COMPARE_LIST`,
  Remove: `DELETE_FROM_COMPARE_LIST`,
};

export const fetchCompareListAction = (action, productId) =>
  api.get(API_URL, {
    action,
    id: productId,
    compare_list_reload: `Y`,
  });
