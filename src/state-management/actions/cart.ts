export const actionShopping = {
  ADD: "ADD",
  CLEAR: "CLEAR",
  FETCH: "FETCH",
  INCREMENT: "INCREMENT",
  DECEREMENT: "DECEREMENT",
  REMOVE_SINGLE_CART_ITEM: "REMOVE_SINGLE_CART_ITEM",
};
export const addShopping = (product: any) => (dispatch: any) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: product,
  });
};

export const incrementCartItem = (product: any) => (dispatch: any) => {
  return dispatch({
    type: actionShopping.INCREMENT,
    payload: product,
  });
};

export const decrementCartItem = (product: any) => (dispatch: any) => {
  return dispatch({
    type: actionShopping.DECEREMENT,
    payload: product,
  });
};

export const fetchShopping = () => (dispatch: any) => {
  return dispatch({
    type: actionShopping.FETCH,
  });
};

export const removeSingleCartItemAction = (id: any) => (dispatch: any) => {
  return dispatch({
    type: actionShopping.REMOVE_SINGLE_CART_ITEM,
    payload: id,
  });
};

export const clearShopping = () => (dispatch: any) => {
  return dispatch({
    type: actionShopping.CLEAR,
  });
};
