import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../../constants/actionTypes";
import { productInitialState } from "../initialState/productInitialState";

export enum productAction {
  GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE",
}

export type product = {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
  image: string;
};
export type pState = {
  products: product[];
  product: {};
};

export type getProductAction = {
  type: GET_PRODUCTS_REQUEST;
};
export type getProductActionSuccess = {
  type: GET_PRODUCTS_SUCCESS;
  payload: product[];
};
export type productActions = getProductAction | getProductActionSuccess;

const productReducer = (
  state: pState = productInitialState,
  action: productActions
) => {
  switch (action.type) {
    case productAction.GET_PRODUCTS_REQUEST:
      return {
        ...state,
      };
    case productAction.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
