import { Circle, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { openCustomDrawer } from "../context/actions/cartActions";
import { CartContext } from "../context/CartProvider";

function Nav() {
  const cartCont = useContext(CartContext);

  const {
    cartState: { carts },
    cartDispatch,
  } = cartCont;

  const totalQuantity = carts.reduce(
    (acc, cart) => cart.orderedQuantity + acc,
    0
  );
  const openDrawer = () => {
    openCustomDrawer(cartDispatch);
  };

  return (
    <Flex
      px={4}
      pr={[4, 6]}
      justifyContent={"space-between"}
      alignItems="center"
      height={65}
      boxShadow="md"
    >
      <Text fontWeight={"extrabold"} fontSize={23}>
        PharmStore
      </Text>
      <Flex position={"relative"}>
        <Circle
          position={"absolute"}
          bottom={3}
          right={5}
          fontSize={"10px"}
          color={"white"}
          size={"15px"}
          bg={"red"}
        >
          {totalQuantity}
        </Circle>
        <AiOutlineShoppingCart
          style={{ cursor: "pointer" }}
          onClick={openDrawer}
          fontSize={"22px"}
        />
      </Flex>
    </Flex>
  );
}

export default Nav;
