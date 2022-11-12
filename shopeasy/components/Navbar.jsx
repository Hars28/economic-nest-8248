import { Search2Icon } from '@chakra-ui/icons'
import { Button, Flex, Input, InputGroup, InputRightElement, Text, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Icon } from '@chakra-ui/react'
import LoginPg from './loginSignupmodal/LoginPg'
import { useSession } from 'next-auth/react'
import Logout from './loginSignupmodal/Logout'

const Navbar = () => {
const session  = useSession()

const [auth, setauth] = useState(false)

useEffect(()=>{
if(session.status=="authenticated"){
setauth(true)
}else{
  setauth(false)
}
},[session.status])


  return (
    <Flex direction="row" justify="space-between" align="center">
        <Text>AJIO</Text>
        <Flex direction="column">
        <Flex direction="row" gap="10px" align="center" justify="flex-end">
          {
            auth ? <Logout setauth={setauth}/> : <LoginPg setauth={setauth}>Sign in / Join AJIO</LoginPg>
          }
          
            <Text>Customer Care</Text>
            <Button bg="black" color="white">Visit AJIOLUXE</Button>
        </Flex>
        <Flex direction="row" gap="10px" align="center" >
            <Text>MEN</Text>
            <Text>WOMEN</Text>
            <Text>KIDS</Text>
            <Text>INDIE</Text>
            <Text >HOME AND KITCHEN</Text>
            <InputGroup>
            <Input borderRadius="25px" placeholder='Search Ajio'/>
            <InputRightElement><Search2Icon/></InputRightElement>
            </InputGroup>
            <Box borderRadius="50%" bg="black" color="white">Like Icon</Box>
            <Box borderRadius="50%" bg="black" color="white">Cart Icon</Box>
        </Flex>
        </Flex>
    </Flex>
  )
}

export default Navbar