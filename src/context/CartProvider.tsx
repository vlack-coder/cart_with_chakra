import React, { createContext, useReducer } from "react";
import { cartInitialState, cartState } from "./initialState/cartInitialState";

import cartReducer, { cartActions } from "./reducers/cartReducer";

type CartContextType = {
  cartState: cartState;
  cartDispatch: React.Dispatch<cartActions>;
};

export const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
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
