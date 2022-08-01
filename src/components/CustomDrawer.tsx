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
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  closeDrawer,
  decreaseCartItem,
  increaseCartItem,
} from "../context/actions/cartActions";
import { CartContext } from "../context/CartProvider";
import { cartType } from "../context/initialState/cartInitialState";
import { product } from "../context/reducers/productReducer";

function CustomDrawer() {
  const cartCont = useContext(CartContext);
  const {
    cartState: { carts, isOpen },
    cartDispatch,
  } = cartCont;
  const increaseCount = (cart: product | cartType) => {
    increaseCartItem(cart)(cartDispatch);
  };
  const decreaseCount = (cart: product | cartType) => {
    decreaseCartItem(cart)(cartDispatch);
  };
  const onClose = () => {
    closeDrawer(cartDispatch);
  };
  const total = carts.reduce(
    (acc, cart) => cart.orderedQuantity * cart.price + acc,
    0
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader boxShadow={"md"}>Cart Summary</DrawerHeader>

        <DrawerBody>
          {carts.map((cart) => (
            <>
              <Flex key={cart.id} gap={5}>
                <Center borderTopRadius={"lg"} width="160px">
                  <Image src={cart.image} width="160px" height={"100px"} />
                </Center>
                <Flex
                  pt={3}
                  justifyContent={"space-between"}
                  flexDir={"column"}
                >
                  <Text
                    noOfLines={3}
                    fontSize={14}
                    lineHeight="1.2"
                    fontWeight="bold"
                  >
                    {cart.description}
                  </Text>
                  <Text fontSize={16} fontWeight="bold">
                    ₦{cart.price}
                  </Text>
                </Flex>
              </Flex>
              <Divider mt={5} orientation="horizontal" />
              <Flex mt={3} justifyContent={"space-between"} alignItems="center">
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
            <Text fontSize={21} fontWeight={"extrabold"}>
              ₦{total}
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
  );
}

export default CustomDrawer;
