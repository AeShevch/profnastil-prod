import {
  CompareAction,
  fetchCompareListAction,
} from "../api/api-actions/fetchCompareListAction";

export const callCompareAction = (addToCompareButton) => {
  const { action, productId } = addToCompareButton.dataset;

  return fetchCompareListAction(action, productId).then((res) => {
    switch (action) {
      case CompareAction.Add:
        addToCompareButton.dataset.action = CompareAction.Remove;
        addToCompareButton.ariaPressed = `true`;
        break;
      case CompareAction.Remove:
        addToCompareButton.dataset.action = CompareAction.Add;
        addToCompareButton.ariaPressed = `false`;
        break;
    }
  });
};
