import { Box, ChakraProvider, Container, theme } from "@chakra-ui/react";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/Provider";
import Products from "./pages/Products";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ProductProvider>
      <CartProvider>
        <Box height={65} boxShadow="md" />
        <Container maxW={"6xl"} centerContent={true} pt={10}>
          <Products />
        </Container>
      </CartProvider>
    </ProductProvider>
  </ChakraProvider>
);
