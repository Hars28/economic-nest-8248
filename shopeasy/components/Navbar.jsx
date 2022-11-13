import { Search2Icon } from '@chakra-ui/icons'
import { Button, Flex, Input, InputGroup, InputRightElement, Text, Box, Image, Divider } from '@chakra-ui/react'
import {
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import Logout from './loginSignupmodal/Logout';
import React, { useEffect, useState } from 'react'
import {ImMan, ImWoman} from "react-icons/im"
import {FaChild} from "react-icons/fa"
import {MdMapsHomeWork} from "react-icons/md"
import {AiFillHeart, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/Ai"
import { Icon } from '@chakra-ui/react'
import LoginPg from './loginSignupmodal/LoginPg'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const session  = useSession()

  console.log(session)

  const router = useRouter()
const [auth, setauth] = useState(false)


useEffect(()=>{
if(session.status=="authenticated"){
setauth(true)
}else{
  setauth(false)
}
},[session.status])

  return (    
        <Flex borderTop="2px solid" alignItems="center" justifyContent="space-around" mx="auto" left={0} top={0} pos="sticky" bg="white" zIndex={10000} opacity={10000}>
         <Image onClick={()=>router.replace("/")} cursor="pointer" w={["20%","20%","15%","15%"]} src="/shopeeasy-logo.png" alt=""/>
          <Flex  w={{sm:"500px",sm:"500px",md:"700px",lg:"900px",}} direction="column" border="3px orange">
          <HStack   display={{ base: "none", md: "inline-flex", lg:"inline-flex" }} alignItems="center" justify="flex-end" >
          {
            auth ? <><Text px={3} py ={3}>{session.data.user.name}</Text><Logout setauth={setauth}/></> : <LoginPg setauth={setauth}>Sign in / Join AJIO</LoginPg>
          }

            <Button _hover={{bg:"#ffddba",textDecoration:"underline", color:"black"}} bg="black" onClick={()=>router.push("https://luxe.ajio.com/?_ga=2.146994423.1331547409.1667928574-1338200682.1667928574")} color="white">Visit AJIOLUXE</Button>
        </HStack>
        {/* <Divider orientation="horizontal"/> */}
            <HStack
            
              spacing={1}
              border="5px solid #ffddba"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
              justify="flex-end">
            
              <Button variant="ghost" onClick={()=>router.replace("/mens")}>MEN</Button>
              <Button variant="ghost" onClick={()=>router.replace("/womens")}>WOMEN</Button>
              <Button variant="ghost" onClick={()=>router.replace("/kids")}>KIDS</Button>
              <Button variant="ghost" onClick={()=>router.replace("/indie")}>INDIE</Button>
              <Button variant="ghost" onClick={()=>router.replace("/home")}>HOME AND KITCHEN</Button>
              <InputGroup width="250px">
            <Input borderRadius="25px" placeholder='Search AJIO'/>
            <InputRightElement><Search2Icon/></InputRightElement>
            </InputGroup>
            <AiFillHeart size="25px"/>
            <AiOutlineShoppingCart size="25px" onClick={()=>router.replace("/cart")}/>
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

                <Button onClick={()=>router.replace("/mens")} leftIcon={<ImMan/>} border="2px solid" variant="ghost">
                  MEN
                </Button>
                <Button onClick={()=>router.replace("/womens")} leftIcon={<ImWoman/>} border="2px solid" variant="ghost">
                  WOMEN
                </Button>
                <Button onClick={()=>router.replace("/kids")} leftIcon={<FaChild/>} border="2px solid" variant="ghost">
                  KIDS
                </Button>                
                <Button onClick={()=>router.replace("/home")} leftIcon={<MdMapsHomeWork/>} border="2px solid" variant="ghost">
                  HOME AND KITCHEN
                </Button>
                <Button onClick={()=>router.replace("/cart")} leftIcon={<AiOutlineShoppingCart/>} border="2px solid" variant="ghost">
                  CART
                </Button>
                <Button onClick={()=>router.replace("/")} leftIcon={<AiFillHeart/>} border="2px solid" variant="ghost">
                  WISHLIST
                </Button>
                <Button border="2px solid" variant="ghost">{
                  auth?
                <LoginPg >LOGIN / SIGNUP</LoginPg>
                :<Logout setauth={setauth}/>
}
                </Button>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
  )
}

export default Navbar