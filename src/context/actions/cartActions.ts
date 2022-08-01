
import { cartType } from "../initialState/cartInitialState";
import { cartAction, product } from "../reducers/cartReducer";

const {
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  OPEN_CART,
  CLOSE_CART
} = cartAction;

export const increaseCartItem =
  
  (cItem: product | cartType): any =>
  (dispatch: any) => {
    
    
    
    
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
  (cItem: product | cartType): any =>
  (dispatch: any) => {
    try {
      dispatch({
        type: DECREASE_CART_ITEM,
        payload: cItem,
      });
    } catch (error) {
      console.log('error', error)
    }
  };

  export const openCustomDrawer =
  (dispatch: any) => {
    try {
      dispatch({
        type: OPEN_CART,
      });
    } catch (error) {
      console.log('error', error)
    }
  };
  export const closeDrawer =
  (dispatch: any) => {
    try {
      dispatch({
        type: CLOSE_CART,
      });
    } catch (error) {
      console.log('error', error)
    }
  };