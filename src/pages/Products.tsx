import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Product from "../components/Product";
import { getProducts } from "../context/actions/productActions";
import { ProductContext } from "../context/Provider";

function Products() {
  const productCont = useContext(ProductContext);

  const {
    productState: { products },
    productDispatch,
  } = productCont;
  // console.log('productState', productState)

  useEffect(() => {
    console.log("gggg");
    getProducts()(productDispatch);
  }, []);

  return (
      <Flex flexWrap={"wrap"} gap={7}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Flex>
  );
}

export default Products;
