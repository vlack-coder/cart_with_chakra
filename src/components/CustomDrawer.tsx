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
import React from "react";
import { FaAmazon } from "react-icons/fa";

function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const p = {
    name: "Paracetamol",
    description:
      "Paracetamol (acetaminophen) is a pain reliever and a fever reducer",
    sku: "8HE902",
    price: 300,
    image:
      "https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg",
  };
  return (
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
          <>
            <Flex gap={5}>
              <Center
                borderTopRadius={"lg"}
                //   bgColor={"#F8F8F8"}
                //   boxSize="160px"
                width="160px"
              >
                <Image src={p.image} width="160px" height={"100px"} />
              </Center>
              <Flex pt={3} justifyContent={"space-between"} flexDir={"column"}>
                <Text fontSize={14} lineHeight="1.2" fontWeight="bold">
                  {p.description}
                </Text>
                <Text fontSize={16} fontWeight="bold">
                  ₦{p.price}
                </Text>
              </Flex>
            </Flex>
            <Divider mt={5} orientation="horizontal" />
            <Flex mt={3} justifyContent={"space-between"} alignItems="center">
              <ButtonGroup size="sm" isAttached variant="outline">
                <IconButton aria-label="Add to friends" icon={<FaAmazon />} />
                <Button isDisabled={true}>Save</Button>
                <IconButton aria-label="Add to friends" icon={<FaAmazon />} />
              </ButtonGroup>
              <IconButton
                size="sm"
                aria-label="Add to friends"
                icon={<FaAmazon />}
              />
            </Flex>
            <Divider mt={2} orientation="horizontal" />
          </>
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
              21434
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
