import {
  Button,
  ButtonGroup,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image, Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  decreaseCartItem,
  increaseCartItem
} from "../context/actions/cartActions";
import { CartContext } from "../context/CartProvider";
import { cartType } from "../context/initialState/cartInitialState";
import { product } from "../context/reducers/productReducer";

type Productprops = {
  product: product;
};

function Product(props: Productprops) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartCont = useContext(CartContext);

  const {
    cartState: { carts },
    cartDispatch,
  } = cartCont;
  const btnRef = React.useRef();
  const increaseCount = (cart: product | cartType) => {
    increaseCartItem(cart)(cartDispatch);
  };
  const decreaseCount = (cart: product | cartType) => {
    decreaseCartItem(cart)(cartDispatch);
  };
  const openDrawer = (product: product) => {
    increaseCount(product);
    onOpen();
  };
  console.log("carts", carts);
  const total = carts.reduce(
    (acc, cart) => cart.orderedQuantity * cart.price + acc,
    0
  );
  const { price, description, image, name, sku } = props.product;
  return (
    <Flex
      height={"440px"}
      width={"240px"}
      boxShadow={"md"}
      //   boxSize="400px"
      flexDirection={"column"}
      _hover={{ boxShadow: "lg" }}
      cursor="pointer"
      borderRadius={"lg"}
    >
      <Center borderTopRadius={"lg"} bgColor={"#F8F8F8"} boxSize="240px">
        <Image src={image} boxSize="230px" />
      </Center>

      <Flex flex={1} px={4} pt={3} pb={5} flexDir={"column"}>
        <span>
          <Text fontSize={15} display={"inline"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text
            noOfLines={2}
            fontSize={13}
            // display={"inline-block"}
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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader boxShadow={"md"}>Cart Summary</DrawerHeader>

          <DrawerBody>
            {carts.map((cart) => (
              <>
                <Flex gap={5}>
                  <Center
                    borderTopRadius={"lg"}
                    //   bgColor={"#F8F8F8"}
                    //   boxSize="160px"
                    width="160px"
                  >
                    <Image src={cart.image} width="160px" height={"100px"} />
                  </Center>
                  <Flex
                    pt={3}
                    justifyContent={"space-between"}
                    flexDir={"column"}
                  >
                    <Text fontSize={14} lineHeight="1.2" fontWeight="bold">
                      {cart.description}
                    </Text>
                    <Text fontSize={16} fontWeight="bold">
                      ₦{cart.price}
                    </Text>
                  </Flex>
                </Flex>
                <Divider mt={5} orientation="horizontal" />
                <Flex
                  mt={3}
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <ButtonGroup size="sm" isAttached variant="outline">
                    <IconButton
                      aria-label="Add to friends"
                      icon={<AiOutlinePlus />}
                      onClick={() => increaseCount(cart)}
                    />
                    <Button
                      px={5}
                      as="button"
                      isDisabled={true}
                      cursor={"pointer"}
                      color={"black"}
                    >
                      {cart.orderedQuantity}
                    </Button>
                    <IconButton
                      aria-label="Add to friends"
                      icon={<AiOutlineMinus />}
                      onClick={() => decreaseCount(cart)}
                    />
                  </ButtonGroup>
                  <IconButton
                    size="sm"
                    aria-label="Add to friends"
                    icon={<AiOutlineDelete />}
                  />
                </Flex>
                <Divider mt={2} mb={5} orientation="horizontal" />
              </>
            ))}
          </DrawerBody>

          <DrawerFooter display={"block"} boxShadow={"inner"}>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
            <Flex mb={3} justifyContent={"space-between"}>
              <Text fontSize={20} fontWeight="bold">
                Total
              </Text>
              <Text fontSize={19} fontWeight={"extrabold"}>
                {total}
              </Text>
            </Flex>
            {/* <Flex px={5}> */}
            <Flex>
              <Button flex={1} colorScheme="teal" ml="auto" size={"md"}>
                Checkout
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Product;
