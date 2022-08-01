import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { getProducts } from "../context/actions/productActions";
import { ProductContext } from "../context/Provider";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const productCont = useContext(ProductContext);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const {
    productState: { products },
    productDispatch,
  } = productCont;
  // console.log('productState', productState)

  const notify = useCallback(
    () => (e: any) =>
      toast({
        title: e.message,
        description: "Bad Request",
        status: "error",
        duration: 3000,
        isClosable: true,
      }),
    [toast]
  );

  useEffect(() => {
    setLoading(true);
    getProducts(notify())(productDispatch).catch(
      (e: any) => console.log("e", e.message)
      // notify()
    );
    setLoading(false);
  }, [productDispatch, notify]);

  if (loading) return <Spinner />;

  return (
    <Flex pb={"250px"} justifyContent={"center"} flexWrap={"wrap"} gap={7}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Flex>
  );
}

export default Products;
