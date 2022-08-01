import { createGQLClient } from "../../Graphql/GraphQlClient";
import { GET_PRODUCTS } from "../../Graphql/Queries";
import { productAction } from "../reducers/productReducer";

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

export const getProducts =
  (fn: any): any =>
  async (dispatch: any) => {
    // dispatch({
    //   type: GET_PRODUCTS_REQUEST,
    // });
    try {
      const datar = await createGQLClient().query(
        "getProducts",
        GET_PRODUCTS,
        {}
      );
      // console.log('datar', datar)

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: datar,
      });
      // console.log(`datar`, datar);
    } catch (error) {
      console.log("errorrr", { error });
      fn(error);
      throw { error };
    }
  };
