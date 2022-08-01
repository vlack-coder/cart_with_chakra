import React, { createContext, useReducer } from "react";
// import { products } from "../products";
import { productInitialState } from "./initialState/productInitialState";
import productReducer, {
  productActions,
  pState
} from "./reducers/productReducer";

type ProductContextType = {
  productState: pState;
  productDispatch: React.Dispatch<productActions>;
};

export const ProductContext = createContext({} as ProductContextType);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  // const [productState = productInitialState, productDispatch] = useReducer(
  //   productReducer,
  //   productInitialState
  // );
  const [productState = productInitialState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
