import {
  CLOSE_CART,
  DECREASE_CART_ITEM,
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
        isOpen: false,
      };
    case cartAction.INCREASE_CART_ITEM:
      const inCart = state.carts.find(
        (item: any) => item.id === action.payload.id
      );

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

    default:
      return state;
  }
};

export default cartReducer;
