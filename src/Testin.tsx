import React, { useContext, useEffect } from "react";
import { getProducts } from "./context/actions/productActions";
import { ProductContext } from "./context/Provider";

function Testin() {
  const productCont = useContext(ProductContext);

  const { productState, productDispatch } = productCont;
  
  useEffect(() => {
    console.log("gggg");
    // getProducts()(productDispatch)
  }, [])
  

  return (
    <div>
      {/* {productState.products.map(() => (
        <></>
      ))} */}
    </div>
  );
}

export default Testin;
