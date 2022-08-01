import { Flex, useToast } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Product from "../components/Product";
import { getProducts } from "../context/actions/productActions";
import { ProductContext } from "../context/Provider";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const productCont = useContext(ProductContext);
  const toast = useToast();
  const {
    productState: { products },
    productDispatch,
  } = productCont;
  // console.log('productState', productState)
  const notify = (e: any) =>
    toast({
      title: e.message,
      description: "Bad Request",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  useEffect(() => {
    console.log("gggg");
    getProducts(notify)(productDispatch).catch(
      (e: any) => console.log("e", e.error.message)
      // notify()
    );
  }, []);

  return (
    <Flex flexWrap={"wrap"} gap={7}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Flex>
  );
}

export default Products;
