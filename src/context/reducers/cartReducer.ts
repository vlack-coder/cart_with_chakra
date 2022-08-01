import {
  CLOSE_CART,
  DECREASE_CART_ITEM,
  GET_PRODUCTS_SUCCESS,
  INCREASE_CART_ITEM,
  OPEN_CART,
  REMOVE_FROM_CART,
} from "../../constants/actionTypes";
import {
  cartInitialState,
  cartState,
  cartType,
} from "../initialState/cartInitialState";

export enum cartAction {
  OPEN_CART = "OPEN_CART",
  CLOSE_CART = "CLOSE_CART",
  INCREASE_CART_ITEM = "INCREASE_CART_ITEM",
  DECREASE_CART_ITEM = "DECREASE_CART_ITEM",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export type product = {
  name: string;
  description: string;
  sku: string;
  price: number;
  image: string;
};

export type openCart = {
  type: OPEN_CART;
};
export type closeCart = {
  type: CLOSE_CART;
};
export type increaseCartItem = {
  type: INCREASE_CART_ITEM;
  payload: cartType;
};
export type decreaseCartItem = {
  type: DECREASE_CART_ITEM;
  payload: cartType;
};
export type removeCartItem = {
  type: REMOVE_FROM_CART;
  payload: cartState;
};

export type cartActions =
  | openCart
  | closeCart
  | increaseCartItem
  | decreaseCartItem
  | removeCartItem;

const cartReducer = (
  state: cartState | any = cartInitialState,
  action: cartActions
) => {
  switch (action.type) {
    case cartAction.OPEN_CART:
      return {
        ...state,
        isOpen: true,
      };
    case cartAction.CLOSE_CART:
      return {
        ...state,
        isOpen: true,
      };
    case cartAction.INCREASE_CART_ITEM:
      const inCart = state.carts.find(
        (item: any) => item.id === action.payload.id
      );
      console.log("inCart", inCart);
      return {
        ...state,
        carts: inCart
          ? state.carts.map((item: any) =>
              item.id === action.payload.id
                ? { ...item, orderedQuantity: item.orderedQuantity + 1 }
                : item
            )
          : [...state.carts, { ...action.payload, orderedQuantity: 1 }],
      };
    case cartAction.DECREASE_CART_ITEM:
      const insCart = state.carts.find((item: any) =>
        item.id === action.payload.id ? true : false
      );
      console.log("e don appen");

      return {
        ...state,
        carts:
          insCart && insCart.orderedQuantity > 1
            ? state.carts.map((item: any) =>
                item.id === action.payload.id
                  ? { ...item, orderedQuantity: item.orderedQuantity - 1 }
                  : item
              )
            : state.carts.filter((cart: any) => cart.id !== action.payload.id),
      };
    // case cartAction.INCREASE_CART_ITEM:
    //   const cartClone = [...state.carts];
    //   const inCartIndex = state.carts.findIndex((item: any) =>
    //     item.id === action.payload.id ? true : false
    //   );
    //   console.log("inCartIndex", inCartIndex);
    //   console.log("e reach here");

    //   return {
    //     ...state,
    //     carts:
    //       inCartIndex >= 0
    //         ? (cartClone[inCartIndex] = action.payload)
    //         : [...cartClone, { ...action.payload, orderedQuantity: 1 }],
    //   };

    // case cartAction.DECREASE_CART_ITEM:
    //   return {
    //     ...state,
    //   };
    // case cartAction.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};

export default cartReducer;
