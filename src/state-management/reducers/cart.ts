import { actionShopping } from "../actions/cart";
const shopInitialState = {
  shopping: [],
} as any;
export default function cartReducer(state = shopInitialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case actionShopping.ADD:
      let isExisted = state?.shopping?.some(
        (item: any) => item?.product?.id === payload?.product?.id
      );
      if (isExisted) {
        state?.shopping?.forEach((item: any) => {
          if (item?.product?.id === payload?.product?.id) {
            // item.quantity = item?.quantity + payload?.quantity;
            item.quantity = payload?.quantity;
          }
          return item;
        });
      } else {
        state?.shopping?.push(payload);
      }
      return {
        ...state,
      };

    case actionShopping.INCREMENT:
      const shoppings = Array.from(state?.shopping);
      let isExistedProductInc = state?.shopping?.some(
        (item: any) => item?.product?.id === payload?.product?.id
      );
      if (isExistedProductInc) {
        state?.shopping?.forEach((item: any) => {
          if (item?.product?.id === payload?.product?.id) {
            item.quantity = payload?.quantity;
          }
          return item;
        });
      } else {
        state?.shopping?.push(payload);
      }
      return {
        ...state,
        shopping: shoppings,
      };

    case actionShopping.DECEREMENT:
      const shopping = Array.from(state?.shopping);
      let isExistedProductDec = state?.shopping?.some(
        (item: any) => item?.product?.id === payload?.product?.id
      );
      if (isExistedProductDec) {
        state?.shopping?.forEach((item: any) => {
          if (item?.product?.id === payload?.product?.id) {
            if (payload?.quantity >= 1) {
              item.quantity = payload?.quantity;
            }
          }
          return item;
        });
      } else {
        state?.shopping?.push(payload);
      }
      return {
        ...state,
        shopping,
      };

    case actionShopping.REMOVE_SINGLE_CART_ITEM:
      const removeCartProduct = state?.shopping?.filter(
        (item: any) => item?.product?.id !== payload
      );
      if (removeCartProduct) {
        return {
          ...state,
          shopping: removeCartProduct,
        };
      }
    case actionShopping.CLEAR:
      return {
        shopping: [],
      };
    case actionShopping.FETCH:
    default:
      return state;
  }
}
