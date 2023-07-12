import {
  FETCH_DEMO_FAILURE,
  FETCH_DEMO_REQUEST,
  FETCH_DEMO_SUCCESS,
} from "../types";
const initialState = {
  products: [],
  loading: false,
};

export const products = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case FETCH_DEMO_REQUEST: {
      return { ...state, products: [], loading: true };
    }
    case FETCH_DEMO_SUCCESS: {
      return { ...state, products: action?.payload, loading: false };
    }
    case FETCH_DEMO_FAILURE: {
      return { ...state, products: [], loading: false };
    }
    default:
      return state;
  }
};
