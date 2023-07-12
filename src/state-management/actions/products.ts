import axios from "axios";
import {
  FETCH_DEMO_FAILURE,
  FETCH_DEMO_REQUEST,
  FETCH_DEMO_SUCCESS,
} from "../types";

// inital fetch products
const initalFetch = () => {
  return {
    type: FETCH_DEMO_REQUEST,
  };
};

// successfully fetch products
const successProducts = (successData: any) => {
  return {
    type: FETCH_DEMO_SUCCESS,
    payload: successData,
  };
};

// fail fetch products
const errorProducts = (errorMessage: any) => {
  return {
    type: FETCH_DEMO_FAILURE,
    payload: errorMessage,
  };
};

// products fetch api call
export const fetchProducts = () => {
  return (dispatch: any) => {
    dispatch(initalFetch());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        dispatch(successProducts(res.data));
      })
      .catch((err: any) => {
        dispatch(errorProducts(err));
      });
  };
};
