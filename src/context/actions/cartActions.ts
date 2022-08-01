// import { GET_PRODUCTS } from "../../constants/actionTypes";
import { cartType } from "../initialState/cartInitialState";
import { cartAction, product } from "../reducers/cartReducer";

const {
  CLOSE_CART,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  OPEN_CART,
  REMOVE_FROM_CART,
} = cartAction;

export const increaseCartItem =
  // (cItem: Omit<cartType, "orderedQuantity">): any =>
  (cItem: product | cartType): any =>
  (dispatch: any) => {
    // dispatch({
    //   type: GET_PRODUCTS_REQUEST,
    // });
    // console.log('cItem', cItem)
    try {
      dispatch({
        type: INCREASE_CART_ITEM,
        payload: cItem,
      });
    } catch (error) {
      console.log('error', error)
    }
  };

  export const decreaseCartItem =
  // (cItem: Omit<cartType, "orderedQuantity">): any =>
  (cItem: product | cartType): any =>
  (dispatch: any) => {
    // dispatch({
    //   type: GET_PRODUCTS_REQUEST,
    // });
    // console.log('cItem', cItem)
    try {
      dispatch({
        type: DECREASE_CART_ITEM,
        payload: cItem,
      });
    } catch (error) {
      console.log('error', error)
    }
  };
