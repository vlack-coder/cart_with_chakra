import React, { createContext, useReducer } from "react";
import { cartInitialState, cartState } from "./initialState/cartInitialState";
// import { products } from "../products";
import cartReducer, { cartActions } from "./reducers/cartReducer";

type CartContextType = {
  cartState: cartState;
  cartDispatch: React.Dispatch<cartActions>;
};

export const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // const [productState = productInitialState, productDispatch] = useReducer(
  //   productReducer,
  //   productInitialState
  // );
  const [cartState = cartInitialState, cartDispatch] = useReducer(
    cartReducer,
    cartInitialState
  );
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
