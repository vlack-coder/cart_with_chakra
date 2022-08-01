import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import {
  increaseCartItem,
  openCustomDrawer
} from "../context/actions/cartActions";
import { CartContext } from "../context/CartProvider";
import { cartType } from "../context/initialState/cartInitialState";
import { product } from "../context/reducers/productReducer";

type Productprops = {
  product: product;
};

function Product(props: Productprops) {
  const cartCont = useContext(CartContext);

  const { cartDispatch } = cartCont;
  const increaseCount = (cart: product | cartType) => {
    increaseCartItem(cart)(cartDispatch);
  };

  const openDrawer = (product: product) => {
    increaseCount(product);
    openCustomDrawer(cartDispatch);
  };

  const { price, description, image, name } = props.product;
  return (
    <Flex
      height={"440px"}
      width={["85%", "240px"]}
      boxShadow={"md"}
      flexDirection={"column"}
      _hover={{ boxShadow: "lg" }}
      cursor="pointer"
      borderRadius={"lg"}
    >
      <Center
        borderTopRadius={"lg"}
        pb={[2, 3]}
        bgColor={"#F8F8F8"}
        height={["240px"]}
      >
        <Image
          width={"100%"}
          borderTopRadius={"lg"}
          src={image}
          height={["240px"]}
        />
      </Center>

      <Flex flex={1} px={4} pt={3} pb={[7, 6]} flexDir={"column"}>
        <span>
          <Text fontSize={15} display={"inline"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text
            noOfLines={2}
            fontSize={13}
            fontWeight={"normal"}
            lineHeight={1.3}
          >
            {description}
          </Text>
        </span>

        <Text
          noOfLines={1}
          fontSize={16}
          display={"inline-block"}
          fontWeight={"extrabold"}
          mb={"auto"}
        >
          ₦{price}
        </Text>
        <Button
          onClick={() => openDrawer(props.product)}
          colorScheme="teal"
          variant="outline"
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
}

export default Product;
