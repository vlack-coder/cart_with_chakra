import { product } from "../reducers/productReducer";

export type cartType = product & {
  orderedQuantity: number;
};

// export type cartType = {
//   id: number;
//   name: string;
//   description: string;
//   sku: string;
//   price: number;
//   image: string;
//   orderedQuantity: number;
// };

export type cartState = {
  carts: cartType[];
  isOpen: false;
};

export const cartInitialState: cartState = {
  carts: [],
  isOpen: false,
};
