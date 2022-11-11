import { Search2Icon } from '@chakra-ui/icons'
import { Button, Flex, Input, InputGroup, InputRightElement, Text, Box, Image, Divider } from '@chakra-ui/react'
import {
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import React from 'react'
import {ImMan, ImWoman} from "react-icons/im"
import {FaChild} from "react-icons/fa"
import {MdMapsHomeWork} from "react-icons/md"
import {AiFillHeart, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/Ai"
import LoginPg from './loginSignupmodal/LoginPg'
const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (    
        <Flex alignItems="center" justifyContent="space-around" mx="auto">
         <Image objectFit="cover" boxSize={["90px","90px","100px","150px"]} src="/shopeasy-logo.jpeg" alt=""/>
          <Flex w={{sm:"500px",sm:"500px",md:"700px",lg:"900px",}} direction="column" border="3px orange">
          <HStack  display={{ base: "none", md: "inline-flex", lg:"inline-flex" }} alignItems="center" justify="flex-end" >
            <LoginPg>Sign in / Join AJIO</LoginPg>
            <Text>Customer Care</Text>
            <Button bg="black" color="white">Visit AJIOLUXE</Button>
        </HStack>
        {/* <Divider orientation="horizontal"/> */}
            <HStack
            
              spacing={1}
              border="5px solid #ffddba"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
              justify="flex-end">
              <Button variant="ghost">MEN</Button>
              <Button variant="ghost">WOMEN</Button>
              <Button variant="ghost">KIDS</Button>
              <Button variant="ghost">INDIE</Button>
              <Button variant="ghost">HOME AND KITCHEN</Button>
              <InputGroup width="250px">
            <Input borderRadius="25px" placeholder='Search AJIO'/>
            <InputRightElement><Search2Icon/></InputRightElement>
            </InputGroup>
            <AiFillHeart size="25px"/>
            <AiOutlineShoppingCart size="25px"/>
            </HStack>
           
            <HStack display={{ base: "inline-flex", md: "none" }} border="5px solid #ffddba" justify="flex-end">
            <InputGroup  w={{sm:"350px",md:"700px",lg:"900px",}}>
            <Input  borderRadius="25px"  placeholder='Search AJIO'/>
            <InputRightElement><Search2Icon/></InputRightElement>
            </InputGroup>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <Flex
              zIndex={9999}
              border="2px solid "
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                
              >
                
                <CloseButton
                margin="auto"
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button leftIcon={<ImMan/>} border="2px solid" variant="ghost">
                  MEN
                </Button>
                <Button leftIcon={<ImWoman/>} border="2px solid" variant="ghost">
                  WOMEN
                </Button>
                <Button leftIcon={<FaChild/>} border="2px solid" variant="ghost">
                  KIDS
                </Button>                
                <Button leftIcon={<MdMapsHomeWork/>} border="2px solid" variant="ghost">
                  HOME AND KITCHEN
                </Button>
            
                <Button leftIcon={<AiOutlineShoppingCart/>} border="2px solid" variant="ghost">
                  CART
                </Button>
                <Button leftIcon={<AiFillHeart/>} border="2px solid" variant="ghost">
                  WISHLIST
                </Button>
                <LoginPg>LOGIN / SIGNUP</LoginPg>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
  )
}

export default Navbar