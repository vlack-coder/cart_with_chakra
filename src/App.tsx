import { Box, ChakraProvider, Container, theme } from "@chakra-ui/react";
import Product from "./components/Product";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/Provider";
import Products from "./pages/Products";
import Testin from "./Testin";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ProductProvider>
      <CartProvider>
        {/* <Box textAlign="center" fontSize="xl">
        <Testin />
      </Box> */}
        <Box height={65} boxShadow="md" />
        {/* <Box padding={20}> */}
        <Container maxW={"6xl"} centerContent={true} pt={10}>
          <Products />
          {/* <Product /> */}
        </Container>
      </CartProvider>
    </ProductProvider>
  </ChakraProvider>
);
