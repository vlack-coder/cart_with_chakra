// import { GET_PRODUCTS } from "../../constants/actionTypes";
import { product, productAction } from "../reducers/productReducer";
import { productsData } from "../../products";
import { createGQLClient } from "../../Graphql/GraphQlClient";
import { GET_PRODUCTS } from "../../Graphql/Queries";

const { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } = productAction;
// export const getProducts = async (): Promise<product[]> => {
//   return productsData;
// };

// export const getProducts = (): productss[] => (dispatch) => {
//     dispatch({
//         type: GET_PRODUCTS
//     })
//   return products;
// };

export const getProducts = (): any => async (dispatch: any) => {
  // dispatch({
  //   type: GET_PRODUCTS_REQUEST,
  // });
  try {
    const datar = await createGQLClient().query(
      "allProducts", 
      GET_PRODUCTS, 
      {}
    );
    console.log('datar', datar)
 
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: datar,
    });
    console.log(`datar`, datar);
  } catch (error) {}
};
